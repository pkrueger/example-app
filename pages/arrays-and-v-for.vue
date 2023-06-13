<template>
  <section class="p-4 space-y-4 text-gray-800">
    <h2 class="text-2xl font-bold">Arrays and v-for</h2>

    <div class="bg-white p-6 rounded shadow mb-4">
      <h2 class="text-lg font-semibold mb-2">v-for Example:</h2>
      <button
        class="px-4 py-2 font-bold bg-emerald-600 text-white rounded hover:bg-emerald-700"
        @click="addMessage()"
      >
        Add Random Message
      </button>
      <ul class="list-disc pl-5 mt-4">
        <li v-for="message in messages">
          {{ message }}
        </li>
      </ul>
    </div>

    <div class="bg-gray-100 p-6 rounded shadow mb-4">
      <h2 class="text-lg font-semibold mb-2">v-for with v-if Example:</h2>
      <button
        class="px-4 py-2 font-bold bg-emerald-600 text-white rounded hover:bg-emerald-700"
        @click="toggleShowMessages()"
      >
        Toggle Messages
      </button>
      <ul class="list-disc pl-5 mt-4">
        <li v-if="showMessages" v-for="message in messages" :key="message">
          {{ message }}
        </li>
      </ul>
    </div>

    <div class="bg-white p-6 rounded shadow mb-4">
      <h2 class="text-lg font-semibold mb-2">v-for with child v-if Example:</h2>
      <ul class="list-disc pl-5 mt-4">
        <li v-for="(message, index) in messages" :key="index">
          <p v-if="message.split(' ').length > 7">
            {{ message }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const messages = ref(["Hello", "World"]);
const showMessages = ref(true);

const words = [
  "apple",
  "banana",
  "cat",
  "dog",
  "elephant",
  "flower",
  "giraffe",
  "hat",
  "ice cream",
  "jacket",
  "kangaroo",
  "lemon",
  "mouse",
  "nose",
  "orange",
  "penguin",
  "quilt",
  "rabbit",
  "snake",
  "tiger",
  "umbrella",
  "vase",
  "watermelon",
  "xylophone",
  "yacht",
  "zebra",
];

function addMessage() {
  const sentenceLength = Math.floor(Math.random() * 6) + 5; // random sentence length between 5 and 10 words
  const sentence = Array(sentenceLength)
    .fill("")
    .map(() => words[Math.floor(Math.random() * words.length)])
    .join(" ");

  const formattedSentence =
    sentence.charAt(0).toUpperCase() + sentence.slice(1) + ".";

  if (messages.value.includes(formattedSentence)) return;

  messages.value.push(formattedSentence);
}

function toggleShowMessages() {
  showMessages.value = !showMessages.value;
}
</script>

<style scoped></style>
