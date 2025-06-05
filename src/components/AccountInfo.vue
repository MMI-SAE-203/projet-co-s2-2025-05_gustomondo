<script setup>
import { ref, onMounted } from 'vue';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');
const user = ref(null);

// Au chargement, on récupère l’utilisateur ou on redirige vers /login s’il n’est pas connecté
onMounted(() => {
  if (!pb.authStore.isValid) {
    window.location.href = '/Login';
    return;
  }
  user.value = pb.authStore.model;
});

function logout() {
  pb.authStore.clear();
  window.location.href = '/';
}
</script>

<template>
  <div class="max-w-md mx-auto p-6 bg-white rounded-xl shadow space-y-4 mt-12">
    <h2 class="text-2xl font-semibold text-center text-[#1f6659]">Mon compte</h2>
    <div v-if="user">
      <p><strong>Nom :</strong> {{ user.name || '—' }}</p>
      <p><strong>Email :</strong> {{ user.email }}</p>
      <!-- ajoute d’autres champs ici si besoin -->
    </div>
    <div class="text-center">
      <button @click="logout" class="mt-4 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">
        Se déconnecter
      </button>
    </div>
  </div>
</template>
