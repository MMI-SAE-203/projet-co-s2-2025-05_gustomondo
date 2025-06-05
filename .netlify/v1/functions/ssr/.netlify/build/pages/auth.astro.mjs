import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_l7TnKUXe.mjs';
import 'kleur/colors';
import { useSSRContext, ref, mergeProps } from 'vue';
import PocketBase from 'pocketbase';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
/* empty css                                */
import { _ as _export_sfc, $ as $$Layout } from '../chunks/Layout_DrxQTHDd.mjs';
export { renderers } from '../renderers.mjs';

const _sfc_main = {
  __name: 'AuthForm',
  setup(__props, { expose: __expose }) {
  __expose();

const pb = new PocketBase('http://127.0.0.1:8090');

const pseudo          = ref('');
const email           = ref('');
const password        = ref('');
const passwordConfirm = ref('');
const message         = ref('');
const isError         = ref(false);

/* ------------------------------------------------------------------ */
/* INSCRIPTION + CONNEXION                                            */
/* ------------------------------------------------------------------ */
async function register() {
  // validations côté client
  if (!pseudo.value || !email.value || !password.value || !passwordConfirm.value) {
    message.value = 'Veuillez remplir tous les champs.';
    isError.value = true;
    return
  }
  if (password.value !== passwordConfirm.value) {
    message.value = 'Les mots de passe ne correspondent pas.';
    isError.value = true;
    return
  }

  try {
    /* --- 1) création du compte --- */
    await pb.collection('users').create({
      username: pseudo.value.trim(),
      email:    email.value.trim(),
      emailVisibility: false,           // nécessaire sur PB ≤ 0.17
      password: password.value,
      passwordConfirm: passwordConfirm.value
    });

    /* --- 2) connexion immédiate --- */
    await pb.collection('users').authWithPassword(
      email.value.trim(),
      password.value
    );

    /* --- 3) feedback + redirection --- */
    message.value = 'Compte créé et connecté avec succès 🎉';
    isError.value = false;
    setTimeout(() => (window.location.href = '/'), 1000);

  } catch (err) {
    console.error('Erreur PocketBase :', err);
    console.table(err.data);                     // détails champ par champ
    message.value = err.message || 'Impossible de créer le compte.';
    isError.value = true;
  }
}

/* ------------------------------------------------------------------ */
/* CONNEXION                                                          */
/* ------------------------------------------------------------------ */
async function login() {
  if (!email.value || !password.value) {
    message.value = 'Veuillez remplir tous les champs.';
    isError.value = true;
    return
  }

  try {
    await pb.collection('users').authWithPassword(
      email.value.trim(),
      password.value
    );
    message.value = 'Connexion réussie ✅';
    isError.value = false;
    setTimeout(() => (window.location.href = '/'), 1000);
  } catch (err) {
    message.value = err.message || 'Email ou mot de passe incorrect.';
    isError.value = true;
  }
}

const __returned__ = { pb, pseudo, email, password, passwordConfirm, message, isError, register, login, ref, get PocketBase() { return PocketBase } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative max-w-md mx-auto mt-12" }, _attrs))} data-v-f444851c><div class="border-4 border-[#1f6659] rounded-lg bg-white pt-12 pb-6 px-6 shadow-lg" data-v-f444851c><div class="absolute left-1/2 transform -translate-x-1/2 -top-8" data-v-f444851c><div class="bg-[#1f6659] w-16 h-16 rounded-full flex items-center justify-center" data-v-f444851c><img src="gustomondo-logo.png" alt="GustoMundo" class="h-10 w-auto" data-v-f444851c></div></div>`);
  if ($setup.message) {
    _push(`<div class="${
      ssrRenderClass([$setup.isError
            ? 'bg-red-100 border-red-300 text-red-800'
            : 'bg-green-100 border-green-300 text-green-800', "border p-3 rounded-md mb-4 text-center text-sm"])
    }" data-v-f444851c>${
      ssrInterpolate($setup.message)
    }</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<h2 class="text-xl font-bold text-center text-[#1f6659] mb-6" data-v-f444851c>Créer un compte</h2><div class="space-y-4" data-v-f444851c><div data-v-f444851c><label class="block mb-1 text-sm text-gray-700" data-v-f444851c>Pseudo</label><input${
    ssrRenderAttr("value", $setup.pseudo)
  } type="text" class="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1f6659]" data-v-f444851c></div><div data-v-f444851c><label class="block mb-1 text-sm text-gray-700" data-v-f444851c>Email</label><input${
    ssrRenderAttr("value", $setup.email)
  } type="email" class="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1f6659]" data-v-f444851c></div><div data-v-f444851c><label class="block mb-1 text-sm text-gray-700" data-v-f444851c>Mot de passe</label><input${
    ssrRenderAttr("value", $setup.password)
  } type="password" class="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1f6659]" data-v-f444851c></div><div data-v-f444851c><label class="block mb-1 text-sm text-gray-700" data-v-f444851c>Confirmer le mot de passe</label><input${
    ssrRenderAttr("value", $setup.passwordConfirm)
  } type="password" class="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1f6659]" data-v-f444851c></div><button class="w-full bg-[#D2193E] text-white py-2 rounded-lg hover:bg-red-600 transition" data-v-f444851c>Créer un compte</button></div><p class="mt-4 text-center text-sm text-gray-600" data-v-f444851c> Vous possédez déjà un compte ? <a href="/login" class="text-[#1f6659] hover:underline" data-v-f444851c>Se connecter</a></p></div><p class="mt-6 text-center text-xs text-gray-500" data-v-f444851c>© 2025 GustoMundo. Tous droits réservés.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/AuthForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const AuthForm = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-f444851c"]]);

const $$Auth = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-[#f9f5ea] flex items-center justify-center"> ${renderComponent($$result2, "AuthForm", AuthForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/components/AuthForm.vue", "client:component-export": "default" })} </main> ` })}`;
}, "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/pages/Auth.astro", void 0);

const $$file = "C:/Users/enzor/Documents/GitHub/projet-co-s2-2025-05_gustomondo/src/pages/Auth.astro";
const $$url = "/Auth";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Auth,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
