<template>
  <section class="p-4 space-y-4 text-gray-800">
    <h2 class="text-2xl font-bold">Forms</h2>

    <div class="bg-white p-6 rounded shadow mb-4">
      <h2 class="text-lg font-semibold mb-2">Forms and v-model:</h2>
      <form @submit.prevent="saveMessage()" class="mb-4">
        <input
          type="text"
          v-model="message"
          placeholder="Enter a message..."
          class="border-2 border-gray-300 rounded w-full py-2 px-4 mb-3 focus:outline-none focus:border-emerald-600"
        />
        <button
          type="submit"
          class="px-4 py-2 bg-emerald-600 text-white font-bold rounded hover:bg-emerald-700"
        >
          Save Message
        </button>
      </form>
      <h3 class="text-md font-semibold mb-2">Saved Messages:</h3>
      <ul class="list-disc pl-5 mb-4">
        <li v-for="item in messages">
          {{ item }}
        </li>
      </ul>
      <h3 class="text-md font-semibold mb-2">Live input:</h3>
      <p class="border p-2 rounded bg-gray-100">
        {{ message }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const messages = ref(["Hello", "World"]);
let message = ref("");

function saveMessage() {
  messages.value.push(message.value);
  message.value = "";
}
</script>

<style scoped></style>
