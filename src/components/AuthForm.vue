<script setup>
import { ref } from 'vue'
import PocketBase from 'pocketbase'

const pb = new PocketBase('http://127.0.0.1:8090')

const pseudo          = ref('')
const email           = ref('')
const password        = ref('')
const passwordConfirm = ref('')
const message         = ref('')
const isError         = ref(false)

/* ------------------------------------------------------------------ */
/* INSCRIPTION + CONNEXION                                            */
/* ------------------------------------------------------------------ */
async function register() {
  // validations côté client
  if (!pseudo.value || !email.value || !password.value || !passwordConfirm.value) {
    message.value = 'Veuillez remplir tous les champs.'
    isError.value = true
    return
  }
  if (password.value !== passwordConfirm.value) {
    message.value = 'Les mots de passe ne correspondent pas.'
    isError.value = true
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
    })

    /* --- 2) connexion immédiate --- */
    await pb.collection('users').authWithPassword(
      email.value.trim(),
      password.value
    )

    /* --- 3) feedback + redirection --- */
    message.value = 'Compte créé et connecté avec succès 🎉'
    isError.value = false
    setTimeout(() => (window.location.href = '/'), 1000)

  } catch (err) {
    console.error('Erreur PocketBase :', err)
    console.table(err.data)                     // détails champ par champ
    message.value = err.message || 'Impossible de créer le compte.'
    isError.value = true
  }
}

/* ------------------------------------------------------------------ */
/* CONNEXION                                                          */
/* ------------------------------------------------------------------ */
async function login() {
  if (!email.value || !password.value) {
    message.value = 'Veuillez remplir tous les champs.'
    isError.value = true
    return
  }

  try {
    await pb.collection('users').authWithPassword(
      email.value.trim(),
      password.value
    )
    message.value = 'Connexion réussie ✅'
    isError.value = false
    setTimeout(() => (window.location.href = '/'), 1000)
  } catch (err) {
    message.value = err.message || 'Email ou mot de passe incorrect.'
    isError.value = true
  }
}
</script>

<template>
  <div class="relative max-w-md mx-auto mt-12">
    <div class="border-4 border-[#1f6659] rounded-lg bg-white pt-12 pb-6 px-6 shadow-lg">
      <div class="absolute left-1/2 transform -translate-x-1/2 -top-8">
        <div class="bg-[#1f6659] w-16 h-16 rounded-full flex items-center justify-center">
          <img src="gustomondo-logo.png" alt="GustoMundo" class="h-10 w-auto" />
        </div>
      </div>

      <transition name="fade">
        <div
          v-if="message"
          :class="isError
            ? 'bg-red-100 border-red-300 text-red-800'
            : 'bg-green-100 border-green-300 text-green-800'"
          class="border p-3 rounded-md mb-4 text-center text-sm"
        >
          {{ message }}
        </div>
      </transition>

      <h2 class="text-xl font-bold text-center text-[#1f6659] mb-6">Créer un compte</h2>

      <!-- Formulaire -->
      <div class="space-y-4">
        <div>
          <label class="block mb-1 text-sm text-gray-700">Pseudo</label>
          <input v-model="pseudo" type="text" class="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1f6659]" />
        </div>
        <div>
          <label class="block mb-1 text-sm text-gray-700">Email</label>
          <input v-model="email" type="email" class="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1f6659]" />
        </div>
        <div>
          <label class="block mb-1 text-sm text-gray-700">Mot de passe</label>
          <input v-model="password" type="password" class="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1f6659]" />
        </div>
        <div>
          <label class="block mb-1 text-sm text-gray-700">Confirmer le mot de passe</label>
          <input v-model="passwordConfirm" type="password" class="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1f6659]" />
        </div>
        <button @click="register" class="w-full bg-[#D2193E] text-white py-2 rounded-lg hover:bg-red-600 transition">Créer un compte</button>
      </div>

      <p class="mt-4 text-center text-sm text-gray-600">
        Vous possédez déjà un compte ?
        <a href="/login" class="text-[#1f6659] hover:underline">Se connecter</a>
      </p>
    </div>

    <p class="mt-6 text-center text-xs text-gray-500">© 2025 GustoMundo. Tous droits réservés.</p>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
