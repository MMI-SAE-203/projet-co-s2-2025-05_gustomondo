

import PocketBase from 'pocketbase';

export const pb = new PocketBase("https://gustomundo.lucas-lebars.fr:443");

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









export async function getProduitsFiltered({ pays, produits, priceMin, priceMax }) {
    let filterArr = [];
  
    // Ici, on utilise "Pays" et "Produits" exactement comme dans PocketBase
    if (pays) {
      filterArr.push(`Pays = "${pays}"`);
    }
    if (produits) {
      filterArr.push(`Produits = "${produits}"`);
    }
    if (priceMin !== undefined) {
      filterArr.push(`price >= ${priceMin}`);
    }
    if (priceMax !== undefined) {
      filterArr.push(`price <= ${priceMax}`);
    }
  
    const filterQuery = filterArr.join(' && ');
    const options = filterQuery ? { filter: filterQuery } : {};
  
    // Récupération des produits filtrés (max 200 items)
    const produitsList = await pb.collection('Produit').getFullList(200, options);
  
    // Ajout d’une propriété img pour l’URL de l’image, si besoin
    return produitsList.map((produit) => {
      produit.img = pb.files.getURL(produit, produit.images);
      return produit;
    });
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

// /**
//  * Récupère la liste complète des recettes.
//  */
// export async function getRecettes() {
//   try {
//     const recettes = await pb.collection('Recette').getFullList();
//     return recettes;
//   } catch (error) {
//     console.error('Erreur lors de la récupération des recettes :', error);
//     throw error;
//   }
// }

 export default pb;
