<script setup>
import { ref, onMounted } from 'vue'
import PocketBase from 'pocketbase'

const props = defineProps({ mobile: Boolean })
const pb = new PocketBase('http://127.0.0.1:8090')
const isLogged = ref(pb.authStore.isValid)

onMounted(() => {
  pb.authStore.onChange(() => {
    isLogged.value = pb.authStore.isValid
  })
})

function logout() {
  pb.authStore.clear()
  window.location.href = '/'
}
</script>

<template>
  <div :class="mobile ? 'flex flex-col space-y-2' : 'flex space-x-3'">
    <template v-if="isLogged">
      <!-- Lien vers /Compte (C majuscule) -->
      <a
        href="/Compte"
        :class="mobile
          ? 'block border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-[#D2193E]'
          : 'border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-[#D2193E]'"
      >
        Mon compte
      </a>
      <button
        @click="logout"
        :class="mobile
          ? 'block bg-white text-[#D2193E] px-4 py-2 rounded-full hover:bg-gray-200'
          : 'bg-white text-[#D2193E] px-4 py-2 rounded-full hover:bg-gray-200'"
      >
        Logout
      </button>
    </template>
    <template v-else>
      <!-- Liens vers /Login (L majuscule) -->
      <a
        href="/Login"
        :class="mobile
          ? 'block border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-[#D2193E]'
          : 'border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-[#D2193E]'"
      >
        Se connecter
      </a>
      <a
        href="/Login"
        :class="mobile
          ? 'block bg-white text-[#D2193E] px-4 py-2 rounded-full hover:bg-gray-200'
          : 'bg-white text-[#D2193E] px-4 py-2 rounded-full hover:bg-gray-200'"
      >
        Commencer
      </a>
    </template>
  </div>
</template>
