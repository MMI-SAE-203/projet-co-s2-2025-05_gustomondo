

import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

pb.autoCancellation(false);



export async function getProduits() {
  const list = await pb.collection('Produit').getFullList({
    sort: '-created',
  });

  // Ajout de l'URL d'image à chaque record
  return list.map((rec) => ({
    ...rec,
    imgUrl: pb.files.getURL(rec, rec.image),  // SDK ≥ 0.15
  }));
}
/* ▸ Un produit par ID ------------------------------------------------------- */
export async function produitById(id) {
  const rec = await pb.collection('Produit').getOne(id);
  if (!rec) return null;
  rec.imgUrl = pb.files.getURL(rec, rec.image);
  return rec;
}


export async function getProduitsByCategory(type = '') {
  const filter = type ? `Produits = "${type}"` : '';
  console.log("→ getProduitsByCategory :", { type, }); 
  const produits = await pb.collection('Produit').getFullList({ filter });

  return produits.map((p) => ({
    ...p,
    imgUrl: p.image ? pb.files.getURL(p, p.image) : null,
  }));
}

/* ------------------------------------------------------------------ */
/*  Catégories distinctes (valeurs du champ Produits)                 */
/* ------------------------------------------------------------------ */
export async function getCategories() {
  // Ne ramène que la colonne Produits pour alléger la requête
  const rows = await pb.collection('Produit').getFullList({ fields: 'Produits' });

  // Set() pour supprimer les doublons, filter(Boolean) pour écarter null/''.
  return [...new Set(rows.map(r => r.Produits).filter(Boolean))].sort();
}

export async function getPays() {
  // Ne ramène que la colonne "Pays" pour alléger
  const rows = await pb.collection('Produit').getFullList({ fields: 'Pays' });

  // On trim et on retire les éléments vides puis on supprime les doublons
  const uniques = new Set(
    rows
      .map(r => r.Pays?.trim())   // trim espaces début/fin, évite null/undefined
      .filter(Boolean)            // supprime null, undefined ou chaîne vide
  );
  return [...uniques].sort();
}

/**filtre pays**/
export async function getProduitsByFilters(categorie = '', pays = '') {
  // On prépare les conditions si une valeur est fournie
  const conditions = [];
  if (categorie) {
    // On trim encore une fois, au cas où le param viendrait d'un espace en trop
    const catTrim = categorie.trim();
    conditions.push(`Produits = "${catTrim}"`);
  }
  if (pays) {
    const paysTrim = pays.trim();
    conditions.push(`Pays = "${paysTrim}"`);
  }

  // On joint les conditions par ' && ' ; si aucune condition, filter='' (renvoie tout)
  const filterString = conditions.length > 0 ? conditions.join(' && ') : '';
  console.log("→ getProduitsByFilters :", { categorie, pays, filter: filterString });

  const produits = await pb
    .collection('Produit')
    .getFullList({ filter: filterString });

  return produits.map((p) => ({
    ...p,
    imgUrl: p.image ? pb.files.getURL(p, p.image) : null,
  }));
}




export async function createCommande(data) {
  try {
    const commande = await pb.collection('commandes').create(data);
    return commande;
  } catch (error) {
    console.error('Erreur lors de la création de la commande :', error);
    throw error;
  }
}

/* ------------------------------------------------------------------ */
/*  Recettes (collection "Recettes")                                   */
/* ------------------------------------------------------------------ */

// 1. Récupérer toutes les recettes (sans filtre)
export async function getRecettes() {
  const list = await pb.collection('Recettes').getFullList({ sort: '-created' });
  return list.map((rec) => ({
    ...rec,
    imgUrl: rec.Image_recette ? pb.files.getURL(rec, rec.Image_recette) : null,
  }));
}

export async function getRecetteById(id) {
  try {
    const rec = await pb.collection("Recettes").getOne(id);
    if (!rec) return null;
    // Ajout de l’URL de l’image si elle existe
    rec.imgUrl = rec.Image_recette ? pb.files.getURL(rec, rec.Image_recette) : null;
    return rec;
  } catch (err) {
    console.error("Erreur getRecetteById:", err);
    return null;
  }
}

// 2. Récupérer les recettes selon deux filtres : temps + difficulté
export async function getRecettesByFilters(temps = '', difficulte = '') {
  const conditions = [];
  if (temps) {
    const t = temps.trim();
    conditions.push(`Temps_de_preparation_recette = "${t}"`);
  }
  if (difficulte) {
    const d = difficulte.trim();
    conditions.push(`Difficulte_recette = "${d}"`);
  }
  const filterString = conditions.length > 0 ? conditions.join(' && ') : '';

  const list = await pb.collection('Recettes').getFullList({ filter: filterString });
  return list.map((rec) => ({
    ...rec,
    imgUrl: rec.Image_recette ? pb.files.getURL(rec, rec.Image_recette) : null,
  }));
}

// 3. Récupérer la liste des valeurs distinctes de "Temps_de_preparation_recette"
export async function getTimes() {
  // On ne récupère que le champ Temps_de_preparation_recette pour alléger
  const rows = await pb
    .collection('Recettes')
    .getFullList({ fields: 'Temps_de_preparation_recette' });

  // On trim, on filtre non-null, on transforme en Set pour uniques, puis on sort
  const uniques = new Set(
    rows
      .map((r) => r.Temps_de_preparation_recette?.trim())
      .filter(Boolean)
  );
  return [...uniques].sort((a, b) => {
    // Si vous voulez trier numériquement (ex. “5 minutes” avant “10 minutes”), il faut extraire le chiffre
    // Sinon, on laisse un tri lexicographique pour l’exemple :
    const na = parseInt(a, 10);
    const nb = parseInt(b, 10);
    if (!isNaN(na) && !isNaN(nb)) return na - nb;
    return a.localeCompare(b);
  });
}

// 4. Récupérer la liste des valeurs distinctes de "Difficulte_recette"
export async function getDifficulties() {
  const rows = await pb
    .collection('Recettes')
    .getFullList({ fields: 'Difficulte_recette' });

  const uniques = new Set(
    rows
      .map((r) => r.Difficulte_recette?.trim())
      .filter(Boolean)
  );
  return [...uniques].sort();
}



/**
 * Décoder un JWT (format "header.payload.signature") pour en extraire le payload en JSON.
 * On ne vérifie pas la signature ici, on fait simplement base64 → JSON.
 *
 * @param {string} token — Le JWT PocketBase
 * @returns {object|null} → Le payload décodé (objet), ou null si erreur
 */
function decodeJwtPayload(token) {
  try {
    // 1. Séparer les trois parties et prendre la partie "payload" (index 1)
    const base64Payload = token.split('.')[1];
    if (!base64Payload) return null;

    // 2. Ajuster les caractères URL-safe Base64
    const base64 = base64Payload.replace(/-/g, '+').replace(/_/g, '/');

    // 3. Décoder du Base64 en chaîne JSON
    const jsonPayload = Buffer.from(base64, 'base64').toString('utf-8');
    return JSON.parse(jsonPayload);
  } catch (err) {
    console.error('[decodeJwtPayload] Erreur lors du décodage du JWT :', err);
    return null;
  }
}



/**
 * Récupère l’objet "user" complet à partir d’un token JWT PocketBase
 * @param {string} token — Le JWT stocké en cookie
 * @returns {Promise<{id:string, email:string, username:string, avatarUrl:string|null}|null>}
 */
export async function getUserFromToken(token) {
  if (!token) {
    return null;
  }

  // Décoder le JWT pour extraire l’ID de l’utilisateur
  const payload = decodeJwtPayload(token);
  if (!payload || !payload.id) {
    console.warn('[getUserFromToken] JWT invalide ou sans champ "id".');
    return null;
  }
  const userId = payload.id;

  try {
    // Aller chercher le record dans PocketBase
    const userRecord = await pb.collection('users').getOne(userId);
    if (!userRecord) {
      console.warn(`[getUserFromToken] Aucun utilisateur trouvé pour id=${userId}`);
      return null;
    }

    // Générer l’URL de l’avatar si on a un champ "avatar" (File = tableau)
    let avatarUrl = null;
    if (Array.isArray(userRecord.avatar) && userRecord.avatar.length > 0) {
      avatarUrl = pb.files.getURL(userRecord, 'avatar');
    }

    // Retourner un objet simplifié
    return {
      id: userRecord.id,
      email: userRecord.email,
      username: userRecord.username,
      avatarUrl
    };
  } catch (err) {
    console.error('[getUserFromToken] Erreur lors de la récupération du user :', err);
    return null;
  }
}



/**
 * Crée une Response Astro pour la déconnexion :
 * - Supprime le cookie "pb_token" en le plaçant à Max-Age=0
 * - Renvoie un 303 (redirection) vers /login
 */
export function logoutResponse() {
  return new Response(null, {
    status: 303,
    headers: {
      'Set-Cookie': `pb_token=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax`,
      'Location': '/login'
    }
  });
}




// export async function signupUser(email, password, additionalData = {}) {
//   try {
//     const data = { email, password, ...additionalData };
//     const user = await pb.collection('users').create(data);
//     return user;
//   } catch (error) {
//     console.error('Erreur lors de l’inscription :', error);
//     throw error;
//   }
// }


// export async function loginUser(email, password) {
//   try {
//     const authData = await pb.collection('users').authWithPassword(email, password);
//     return authData;
//   } catch (error) {
//     console.error('Erreur lors de la connexion :', error);
//     throw error;
//   }
// }


 export default pb;
