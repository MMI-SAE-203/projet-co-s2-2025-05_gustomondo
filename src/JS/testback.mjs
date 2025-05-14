// fichier : testback.mjs
import {
    // getProduits,
    getProduitsFiltered,

    createCommande,
    // signupUser,
    // loginUser
  } from './backend.mjs';
  
//   // ➜ 1. Récupérer tous les produits
//   try {
//     const produits = await getProduits();
//     console.log('Tous les produits :', produits);
//   } catch (e) {
//     console.error('Erreur getProduits :', e);
//   }
  
  // ➜ 2. Produits filtrés (Pays + Type de Produits)
//   try {
//     const filtres = await getProduitsFiltered({
//       pays: "Mexique",     // le champ PocketBase est "Pays"
//       produits: "Boissons" // le champ PocketBase est "Produits"
//     });
//     console.log('Produits filtrés :', filtres);
//   } catch (e) {
//     console.error('Erreur getProduitsFiltered :', e);
//   }
  

  
//   // ➜ 4. Test de création d'une commande (commande factice)
  try {
    const commandeTest = {
        nom: "Client Test",
        email: "test@example.com",
        adresse: "12 rue du sushi",
        total: 25.90,
        date: new Date().toISOString(),
        personne_id: 'u44091166z16170' // Utilise ici l'ID d'un utilisateur existant
    };
    const commande = await createCommande(commandeTest);
    console.log("Commande créée :", commande);
  } catch (e) {
    console.error("Erreur createCommande :", e);
  }
  
//   // ➜ 5. Test inscription utilisateur
//   try {
//     const user = await signupUser("client@example.com", "motdepasse123", { nom: "Testeur" });
//     console.log("Utilisateur créé :", user);
//   } catch (e) {
//     console.error("Erreur signupUser :", e);
//   }
  
//   // ➜ 6. Test connexion utilisateur
//   try {
//     const auth = await loginUser("client@example.com", "motdepasse123");
//     console.log("Connexion réussie :", auth);
//   } catch (e) {
//     console.error("Erreur loginUser :", e);
//   }