<template>
  <section class="p-4 space-y-4 text-gray-800">
    <h2 class="text-2xl font-bold">Reactive Properties</h2>

    <div class="space-y-2 bg-white p-4 rounded shadow">
      <h3 class="text-xl font-semibold">Computed Property and Watch:</h3>
      <form class="space-y-2">
        <input
          type="number"
          v-model="numberOne"
          placeholder="Number 1"
          class="border-2 border-gray-300 rounded w-full py-2 px-4 focus:outline-none focus:border-emerald-600"
        />
        <input
          type="number"
          v-model="numberTwo"
          placeholder="Number 2"
          class="border-2 border-gray-300 rounded w-full py-2 px-4 focus:outline-none focus:border-emerald-600"
        />
      </form>
      <p>{{ numberOne }} + {{ numberTwo }} = {{ addedNumbers }}</p>
      <ul>
        <li v-for="(message, index) in messages" :key="index">
          {{ message }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const numberOne = ref(0);
const numberTwo = ref(0);

const messages = ref<string[]>([]);

const addedNumbers = computed(() => {
  return numberOne.value + numberTwo.value;
});

watch([numberOne, numberTwo], () => {
  // messages.value.push(
  //   `numberOne changed to ${numberOne.value}, numberTwo changed to ${numberTwo.value}`
  // );
});
</script>

<style scoped></style>
