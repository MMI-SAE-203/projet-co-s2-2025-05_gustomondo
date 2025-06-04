

import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');


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
  rec.imgUrl = pb.files.getUrl(rec, rec.image);
  return rec;
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
