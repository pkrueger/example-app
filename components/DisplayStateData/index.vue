<template>
  <div>{{ number }}</div>
</template>

<script setup lang="ts">
const number = useState<number>("number");
</script>

<style scoped></style>
