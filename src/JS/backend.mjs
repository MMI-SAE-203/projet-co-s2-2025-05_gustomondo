

import PocketBase from 'pocketbase'

// ─────────────────────────────────────────────────────────────
// 1) Instance PocketBase : URL + options
// ─────────────────────────────────────────────────────────────
const pb = new PocketBase('https://gustomundo.lucas-lebars.fr') 
pb.autoCancellation(false)                                      

// Log automatique de TOUTES les requêtes sortantes (utile en dev)
pb.beforeSend = (url, opts) => {
  console.log('[PB] →', url)
  return { url, opts }
}

// Helper générique pour afficher les champs intéressants d’une erreur PocketBase
function logPbError(tag, err) {
  console.error(`[${tag}] STATUS  :`, err.status)
  console.error(`[${tag}] URL     :`, err.url)
  console.error(`[${tag}] RESPONSE:`, err.response)
  console.error(`[${tag}] RAW     :`, err.originalError?.message)
}

// ─────────────────────────────────────────────────────────────
// 2) Produits
// ─────────────────────────────────────────────────────────────
export async function getProduits() {
  try {
    const list = await pb.collection('produit').getFullList({ sort: '-created' })
    return list.map(rec => ({
      ...rec,
      imgUrl: rec.image ? pb.files.getURL(rec, rec.image) : null,
    }))
  } catch (err) {
    logPbError('getProduits', err)
    throw err
  }
}

export async function produitById(id) {
  try {
    const rec = await pb.collection('produit').getOne(id)
    if (!rec) return null
    rec.imgUrl = rec.image ? pb.files.getURL(rec, rec.image) : null
    return rec
  } catch (err) {
    logPbError('produitById', err)
    return null
  }
}

export async function getProduitsByCategory(type = '') {
  try {
    const filter = type ? `Produits = "${type}"` : ''
    console.log('→ getProduitsByCategory :', { type, filter })

    const list = await pb.collection('produit').getFullList({ filter })
    return list.map(p => ({
      ...p,
      imgUrl: p.image ? pb.files.getURL(p, p.image) : null,
    }))
  } catch (err) {
    logPbError('getProduitsByCategory', err)
    throw err
  }
}

export async function getCategories() {
  try {
    const rows = await pb.collection('produit').getFullList({ fields: 'Produits' })
    return [...new Set(rows.map(r => r.Produits).filter(Boolean))].sort()
  } catch (err) {
    logPbError('getCategories', err)
    throw err
  }
}

export async function getPays() {
  try {
    const rows = await pb.collection('produit').getFullList({ fields: 'Pays' })
    const uniques = new Set(rows.map(r => r.Pays?.trim()).filter(Boolean))
    return [...uniques].sort()
  } catch (err) {
    logPbError('getPays', err)
    throw err
  }
}

export async function getProduitsByFilters(categorie = '', pays = '') {
  try {
    const conditions = []
    if (categorie) conditions.push(`Produits = "${categorie.trim()}"`)
    if (pays)      conditions.push(`Pays     = "${pays.trim()}"`)

    const filter = conditions.length ? conditions.join(' && ') : ''
    console.log('→ getProduitsByFilters :', { categorie, pays, filter })

    const list = await pb.collection('produit').getFullList({ filter })
    return list.map(p => ({
      ...p,
      imgUrl: p.image ? pb.files.getURL(p, p.image) : null,
    }))
  } catch (err) {
    logPbError('getProduitsByFilters', err)
    throw err
  }
}

export async function createCommande(data) {
  try {
    return await pb.collection('commandes').create(data)
  } catch (err) {
    logPbError('createCommande', err)
    throw err
  }
}

// ─────────────────────────────────────────────────────────────
// 3) Recettes
// ─────────────────────────────────────────────────────────────
export async function getRecettes() {
  try {
    const list = await pb.collection('recettes').getFullList({ sort: '-created' })
    return list.map(rec => ({
      ...rec,
      imgUrl: rec.Image_recette ? pb.files.getURL(rec, rec.Image_recette) : null,
    }))
  } catch (err) {
    logPbError('getRecettes', err)
    throw err
  }
}

export async function getRecetteById(id) {
  try {
    const rec = await pb.collection('recettes').getOne(id)
    if (!rec) return null
    rec.imgUrl = rec.Image_recette ? pb.files.getURL(rec, rec.Image_recette) : null
    return rec
  } catch (err) {
    logPbError('getRecetteById', err)
    return null
  }
}

export async function getRecettesByFilters(temps = '', difficulte = '') {
  try {
    const cond = []
    if (temps)       cond.push(`Temps_de_preparation_recette = "${temps.trim()}"`)
    if (difficulte)  cond.push(`Difficulte_recette          = "${difficulte.trim()}"`)
    const filter = cond.length ? cond.join(' && ') : ''

    const list = await pb.collection('recettes').getFullList({ filter })
    return list.map(rec => ({
      ...rec,
      imgUrl: rec.Image_recette ? pb.files.getURL(rec, rec.Image_recette) : null,
    }))
  } catch (err) {
    logPbError('getRecettesByFilters', err)
    throw err
  }
}

export async function getTimes() {
  try {
    const rows = await pb.collection('recettes').getFullList({ fields: 'Temps_de_preparation_recette' })
    const uniques = new Set(rows.map(r => r.Temps_de_preparation_recette?.trim()).filter(Boolean))
    return [...uniques].sort((a, b) => {
      const na = parseInt(a, 10)
      const nb = parseInt(b, 10)
      if (!isNaN(na) && !isNaN(nb)) return na - nb
      return a.localeCompare(b)
    })
  } catch (err) {
    logPbError('getTimes', err)
    throw err
  }
}

export async function getDifficulties() {
  try {
    const rows = await pb.collection('recettes').getFullList({ fields: 'Difficulte_recette' })
    const uniques = new Set(rows.map(r => r.Difficulte_recette?.trim()).filter(Boolean))
    return [...uniques].sort()
  } catch (err) {
    logPbError('getDifficulties', err)
    throw err
  }
}

// ─────────────────────────────────────────────────────────────
// 4) Utilisateurs & auth helpers
// ─────────────────────────────────────────────────────────────
function decodeJwtPayload(token) {
  try {
    const base64Payload = token.split('.')[1]
    if (!base64Payload) return null
    const base64 = base64Payload.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = Buffer.from(base64, 'base64').toString('utf-8')
    return JSON.parse(jsonPayload)
  } catch (err) {
    console.error('[decodeJwtPayload] erreur :', err)
    return null
  }
}

export async function getUserFromToken(token) {
  if (!token) return null
  const payload = decodeJwtPayload(token)
  if (!payload?.id) return null
  try {
    const user = await pb.collection('users').getOne(payload.id)
    if (!user) return null
    const avatarUrl = Array.isArray(user.avatar) && user.avatar.length
      ? pb.files.getURL(user, 'avatar')
      : null
    return { id: user.id, email: user.email, username: user.username, avatarUrl }
  } catch (err) {
    logPbError('getUserFromToken', err)
    return null
  }
}

export function logoutResponse() {
  return new Response(null, {
    status: 303,
    headers: {
      'Set-Cookie': 'pb_token=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax',
      Location: '/login',
    },
  })
}

export default pb
