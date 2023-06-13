<template>
  <section class="p-4 space-y-4 text-gray-800">
    <h2 class="text-2xl font-bold">Components</h2>

    <div class="space-y-2 bg-white p-4 rounded shadow">
      <div class="font-sans text-gray-800">
        <h3 class="text-xl font-bold mb-4">Parent Component</h3>
        <p class="text-lg mb-4">
          Message from child:
          <span class="font-bold text-emerald-600">{{ childMessage }}</span>
        </p>
      </div>
      <ChildComponent
        :parentMessage="parentMessage"
        @child-event="handleChildEvent"
        class="mt-4 bg-gray-100 p-4 rounded shadow"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
let parentMessage = ref("Hello from parent");
let childMessage = ref("");

function handleChildEvent(payload: string) {
  childMessage.value = payload;
}
</script>
