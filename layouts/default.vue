<template>
  <div class="font-sans min-h-screen flex bg-gray-200 text-gray-800">
    <aside class="w-64 bg-white shadow p-6">
      <h1 class="text-2xl mb-4 font-semibold">Vue 3 Demo</h1>
      <ul class="text-lg">
        <li
          class="my-2 rounded hover:bg-slate-200 hover:font-semibold cursor-pointer select-none"
          :class="name === 'intro' ? 'font-semibold bg-slate-100' : ''"
        >
          <NuxtLink
            class="text-emerald-600 hover:text-emerald-700 block p-2"
            to="/intro"
            >Intro</NuxtLink
          >
        </li>
        <li
          class="my-2 rounded hover:bg-slate-200 hover:font-semibold cursor-pointer select-none"
          :class="
            name === 'conditional-rendering' ? 'font-semibold bg-slate-100' : ''
          "
        >
          <NuxtLink
            class="text-emerald-600 hover:text-emerald-700 block p-2"
            to="/conditional-rendering"
            >Conditional Rendering</NuxtLink
          >
        </li>
        <li
          class="my-2 rounded hover:bg-slate-200 hover:font-semibold cursor-pointer select-none"
          :class="
            name === 'arrays-and-v-for' ? 'font-semibold bg-slate-100' : ''
          "
        >
          <NuxtLink
            class="text-emerald-600 hover:text-emerald-700 block p-2"
            to="/arrays-and-v-for"
            >Arrays and v-for</NuxtLink
          >
        </li>
        <li
          class="my-2 rounded hover:bg-slate-200 hover:font-semibold cursor-pointer select-none"
          :class="name === 'forms' ? 'font-semibold bg-slate-100' : ''"
        >
          <NuxtLink
            class="text-emerald-600 hover:text-emerald-700 block p-2"
            to="/forms"
            >Forms</NuxtLink
          >
        </li>
        <li
          class="my-2 rounded hover:bg-slate-200 hover:font-semibold cursor-pointer select-none"
          :class="
            name === 'reactive-properties' ? 'font-semibold bg-slate-100' : ''
          "
        >
          <NuxtLink
            class="text-emerald-600 hover:text-emerald-700 block p-2"
            to="/reactive-properties"
            >Reactive Properties</NuxtLink
          >
        </li>
        <li
          class="my-2 rounded hover:bg-slate-200 hover:font-semibold cursor-pointer select-none"
          :class="name === 'components' ? 'font-semibold bg-slate-100' : ''"
        >
          <NuxtLink
            class="text-emerald-600 hover:text-emerald-700 block p-2"
            to="/components"
            >Components</NuxtLink
          >
        </li>
        <!-- <li class="my-2">
          <NuxtLink
            class="text-emerald-600 hover:text-emerald-700"
            to="/data-fetching"
            >Data Fetching & useState</NuxtLink
          >
        </li>
        <li class="my-2">
          <NuxtLink
            class="text-emerald-600 hover:text-emerald-700"
            to="/reactive-properties"
            >Nuxt 3 & Auto Imports</NuxtLink
          >
        </li> -->
      </ul>
    </aside>
    <main class="flex-1 p-6">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const name = computed(() => route.name);
</script>

<style scoped></style>
