<script setup>
import { ref } from 'vue'
import PocketBase from 'pocketbase'

// URL locale de PocketBase
const pb = new PocketBase('http://127.0.0.1:8090')

// Champs liés à l'interface
const email = ref('')
const password = ref('')
const message = ref('')
const isError = ref(false)

async function register() {
  try {
    await pb.collection('Utilisateur').create({
      email: email.value,
      password: password.value,
      passwordConfirm: password.value
    })
    message.value = 'Compte créé avec succès 🎉'
    isError.value = false
  } catch (err) {
    message.value = err.message || 'Erreur lors de la création'
    isError.value = true
  }
}

async function login() {
  try {
    await pb.collection('Utilisateur').authWithPassword(email.value, password.value)
    message.value = 'Connexion réussie ✅'
    isError.value = false
    setTimeout(() => {
      window.location.href = '/'
    }, 1500)
  } catch (err) {
    message.value = err.message || 'Email ou mot de passe incorrect'
    isError.value = true
  }
}
</script>

<template>
  <div class="max-w-md mx-auto p-6 bg-white rounded-xl shadow space-y-4">
    <h2 class="text-xl font-bold text-center text-[#1f6659]">Connexion / Inscription</h2>

    <div>
      <label class="block mb-1 text-sm text-gray-700">Email</label>
      <input v-model="email" type="email" class="w-full border border-gray-300 px-3 py-2 rounded-lg" required />
    </div>

    <div>
      <label class="block mb-1 text-sm text-gray-700">Mot de passe</label>
      <input v-model="password" type="password" class="w-full border border-gray-300 px-3 py-2 rounded-lg" required />
    </div>

    <div class="flex space-x-2">
      <button @click="register" class="w-1/2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Créer</button>
      <button @click="login" class="w-1/2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">Connexion</button>
    </div>

    <p v-if="message" :class="{'text-red-600': isError, 'text-green-600': !isError}" class="text-sm text-center">
      {{ message }}
    </p>
  </div>
</template>

<style scoped>
/* rien à styliser, Tailwind s'occupe de tout */
</style>
