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
  if (!email.value || !password.value) {
    message.value = 'Veuillez remplir tous les champs.'
    isError.value = true
    return
  }
  try {
    await pb.collection('users').create({
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

async function socialLogin(provider) {
  await pb.collection('Utilisateur').authWithOAuth2(provider, {
    redirectUrl: window.location.origin + '/oauth-callback'
  })
}

async function login() {
  if (!email.value || !password.value) {
    message.value = 'Veuillez remplir tous les champs.'
    isError.value = true
    return
  }
  try {
    await pb.collection('users').authWithPassword(
      email.value,
      password.value
    )
    message.value = 'Connexion réussie ✅'
    isError.value = false
    setTimeout(() => window.location.href = '/', 1500)
  } catch (err) {
    message.value = err.message || 'Email ou mot de passe incorrect'
    isError.value = true
  }
}
</script>

<template>
  <div class="relative max-w-md mx-auto mt-12">
    <!-- Container with border -->
    <div class="border-4 border-[#1f6659] rounded-lg bg-white pt-12 pb-6 px-6 shadow-lg">
      <!-- Logo badge -->
      <div class="absolute left-1/2 transform -translate-x-1/2 -top-8">
        <div class="bg-[#1f6659] w-16 h-16 rounded-full flex items-center justify-center">
          <img src="gustomondo-logo.png" alt="GustoMundo" class="h-10 w-auto" />
        </div>
      </div>

      <!-- Feedback Message -->
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

      <!-- Title -->
      <h2 class="text-xl font-bold text-center text-[#1f6659] mb-6">Créer un compte</h2>

      <!-- Social Buttons -->
      <div class="space-y-3 mb-4">
        <button
          @click="socialLogin('google')"
          class="w-full flex items-center justify-center space-x-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100"
        >
          <img src="/icons/google.svg" alt="Google" class="h-5 w-5" />
          <span>S'inscrire avec Google</span>
        </button>
        <button
          @click="socialLogin('facebook')"
          class="w-full flex items-center justify-center space-x-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100"
        >
          <img src="/icons/facebook.svg" alt="Facebook" class="h-5 w-5" />
          <span>S'inscrire avec Facebook</span>
        </button>
      </div>

      <!-- Separator -->
      <div class="flex items-center mb-4">
        <hr class="flex-grow border-gray-300" />
        <span class="mx-3 text-gray-500 uppercase text-xs">ou</span>
        <hr class="flex-grow border-gray-300" />
      </div>

      <!-- Email Signup Form -->
      <div class="space-y-4">
        <div>
          <label class="block mb-1 text-sm text-gray-700">Email</label>
          <input
            v-model="email"
            type="email"
            class="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1f6659]"
            required
          />
        </div>
        <div>
          <label class="block mb-1 text-sm text-gray-700">Mot de passe</label>
          <input
            v-model="password"
            type="password"
            class="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1f6659]"
            required
          />
        </div>
        <button
          @click="register"
          class="w-full bg-[#D2193E] text-white py-2 rounded-lg hover:bg-red-600 transition"
        >Créer un compte</button>
      </div>

      <!-- Link to login -->
      <p class="mt-4 text-center text-sm text-gray-600">
        Vous possédez déjà un compte ?
        <a href="/login" class="text-[#1f6659] hover:underline">Se connecter</a>
      </p>
    </div>

    <!-- Footer -->
    <p class="mt-6 text-center text-xs text-gray-500">© 2025 GustoMundo. Tous droits réservés.</p>
  </div>
</template>

<style scoped>
/* Fade transition */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
