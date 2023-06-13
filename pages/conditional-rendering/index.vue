<template>
  <section class="p-4 space-y-4 text-gray-800">
    <h2 class="text-2xl font-bold">Conditional Rendering</h2>

    <div class="bg-white p-6 rounded shadow mb-4">
      <h2 class="text-lg font-semibold mb-2">v-if Example:</h2>
      <button
        class="px-4 py-2 font-bold bg-emerald-600 text-white rounded hover:bg-emerald-700"
        @click="toggleMessage()"
      >
        Toggle Message
      </button>
      <p class="mt-2" v-if="showMessage">Hello, Vue 3!</p>
    </div>

    <div class="bg-gray-100 p-6 rounded shadow mb-4">
      <h2 class="text-lg font-semibold mb-2">v-if-else Example:</h2>
      <button
        class="px-4 py-2 font-bold bg-emerald-600 text-white rounded hover:bg-emerald-700"
        @click="toggleSecondMessage()"
      >
        Toggle Message
      </button>
      <p class="mt-2" v-if="showSecondMessage">Hello, Vue 3!</p>
      <p class="mt-2" v-else>showSecondMessage is {{ showSecondMessage }}</p>
    </div>

    <div class="bg-white p-6 rounded shadow mb-4">
      <h2 class="text-lg font-semibold mb-2">Complex v-if Example:</h2>
      <p v-if="count > 10">Wow, Vue is really cool</p>
    </div>
  </section>
</template>

<script setup lang="ts">
const showMessage = ref(true);
const showSecondMessage = ref(true);
const count = ref(0);

function toggleSecondMessage() {
  showSecondMessage.value = !showSecondMessage.value;
  count.value--;
}

function toggleMessage() {
  showMessage.value = !showMessage.value;
  count.value++;
}
</script>

<style scoped></style>
