<template>
  <button @click="getNumber()">Get New Number</button>
  <DisplayStateData />
  <div>{{ multipliedByTwo }}</div>
</template>

<script setup lang="ts">
const number = useState<number>("number", () => 0);
const multipliedByTwo = ref(0);

async function getNumber() {
  const { data } = await useFetch<number>("/api/get-a-number");
  if (!data.value) return;
  number.value = data.value;
}

async function multiplyByTwo() {
  const { data } = await useFetch<number>(
    `/api/multiply-by-two/${number.value}`
  );
  if (!data.value) return;
  multipliedByTwo.value = data.value;
}

watch([number], () => {
  multiplyByTwo();
});
</script>

<style scoped></style>
