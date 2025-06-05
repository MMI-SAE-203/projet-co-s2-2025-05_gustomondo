import PocketBase from 'pocketbase';
export { renderers } from '../../renderers.mjs';

// src/pages/api/register.js

async function POST({ request }) {
  try {
    const formData = await request.formData();
    const email           = formData.get('email');
    const username        = formData.get('username');
    const avatarFile      = formData.get('avatar');        // doit être un File
    const password        = formData.get('password');
    const passwordConfirm = formData.get('passwordConfirm');

    // 1) Vérifications basiques
    if (
      typeof email !== 'string' ||
      typeof username !== 'string' ||
      typeof password !== 'string' ||
      typeof passwordConfirm !== 'string'
    ) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Tous les champs « email », « username », « password » et « passwordConfirm » sont obligatoires.'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    if (password !== passwordConfirm) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Les mots de passe ne correspondent pas.'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    if (!(avatarFile instanceof File)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Vous devez fournir une image pour l’avatar.'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 2) Instanciation de PocketBase (local ou votre VPS)
    const pb = new PocketBase('http://127.0.0.1:8090');

    // 3) Création du nouvel utilisateur
    const newUser = await pb.collection('users').create({
      email,
      username,
      avatar: avatarFile,       // on envoie le File ici
      password,
      passwordConfirm
    });

    // 4) Si tout va bien, on renvoie un 201 avec success: true
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Inscription réussie. Vous pouvez maintenant vous connecter.',
        user: newUser
      }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    // 5) En cas d’erreur PocketBase, on extrait désormais LES DEUX FORMES possibles de error.data.data
    console.error('[API register ERROR]', error);

    let errorMsg = 'Une erreur est survenue lors de l’inscription.';
    const fieldErrors = {};

    // --- Cas A : error.data.data est un TABLEAU [{ field, message, ... }, ...] ---
    if (error?.data?.data && Array.isArray(error.data.data)) {
      for (const e of error.data.data) {
        fieldErrors[e.field] = e.message;
      }
      errorMsg = Object.entries(fieldErrors)
                       .map(([fld, msg]) => `${fld}: ${msg}`)
                       .join(' | ');
    }
    // --- Cas B : error.data.data est un OBJET { field1: { message, ... }, field2: {...}, ... } ---
    else if (
      error?.data?.data &&
      typeof error.data.data === 'object' &&
      !Array.isArray(error.data.data)
    ) {
      for (const [fld, detailObj] of Object.entries(error.data.data)) {
        // detailObj peut être { message: "…", … }
        if (detailObj && typeof detailObj.message === 'string') {
          fieldErrors[fld] = detailObj.message;
        } else {
          // Si la forme interne a changé, on stringify tout
          fieldErrors[fld] = JSON.stringify(detailObj);
        }
      }
      errorMsg = Object.entries(fieldErrors)
                       .map(([fld, msg]) => `${fld}: ${msg}`)
                       .join(' | ');
    }
    // --- Sinon, si PocketBase renvoie un message global ---
    else if (error?.data?.message) {
      errorMsg = error.data.message;
    }
    // --- Sinon, on prend le message JavaScript classique ---
    else if (error?.message) {
      errorMsg = error.message;
    }

    return new Response(
      JSON.stringify({
        success: false,
        message: errorMsg,
        details: { fieldErrors, rawError: error }
      }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
