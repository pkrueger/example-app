<template>
  <div>
    <h3 class="text-xl font-bold mb-2">Child Component</h3>
    <p class="text-lg mb-4">
      Message from parent:
      <span class="font-bold text-emerald-600">{{ parentMessage }}</span>
    </p>
    <button
      @click="emitCustomEvent"
      class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-md"
    >
      Send message to parent
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{ parentMessage: string }>();

const emit = defineEmits(["child-event"]);

function emitCustomEvent() {
  emit("child-event", "Hello from child");
}
</script>
