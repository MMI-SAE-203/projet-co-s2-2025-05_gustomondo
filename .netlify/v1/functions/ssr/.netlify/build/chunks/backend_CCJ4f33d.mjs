import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

pb.autoCancellation(false);
/* ▸ Un produit par ID ------------------------------------------------------- */
async function produitById(id) {
  const rec = await pb.collection('Produit').getOne(id);
  if (!rec) return null;
  rec.imgUrl = pb.files.getURL(rec, rec.image);
  return rec;
}

/* ------------------------------------------------------------------ */
/*  Catégories distinctes (valeurs du champ Produits)                 */
/* ------------------------------------------------------------------ */
async function getCategories() {
  // Ne ramène que la colonne Produits pour alléger la requête
  const rows = await pb.collection('Produit').getFullList({ fields: 'Produits' });

  // Set() pour supprimer les doublons, filter(Boolean) pour écarter null/''.
  return [...new Set(rows.map(r => r.Produits).filter(Boolean))].sort();
}

async function getPays() {
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
async function getProduitsByFilters(categorie = '', pays = '') {
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

async function getRecetteById(id) {
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
async function getRecettesByFilters(temps = '', difficulte = '') {
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
async function getTimes() {
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
async function getDifficulties() {
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

export { getPays as a, getProduitsByFilters as b, getRecetteById as c, getTimes as d, getDifficulties as e, getRecettesByFilters as f, getCategories as g, produitById as p };
