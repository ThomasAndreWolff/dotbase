<template>
  <div>
    <Heading>About</Heading>
    <p class="prose">This project was build using:</p>
    <ul class="list-disc prose">
      <li v-for="link in links" :key="link.name">
        <a :href="link.to" class="prose text-blue-500 underline" target="_blank">{{ link.name }}:</a> {{ link.description }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const links = [
  { name: "Typescript", to: "https://www.typescriptlang.org/", description: "Language" },
  { name: "Nuxt", to: "https://nuxt.com/docs/getting-started/introduction", description: "Vue app framework" },
  { name: "Vue 3 (Composition API)", to: "https://vuejs.org/guide/introduction.html", description: "Frontend Library" },
  { name: "Nuxt UI", to: "https://ui.nuxt.com/getting-started", description: "UI library for easily scaffolding project" },
  { name: "TailwindCSS", to: "https://tailwindcss.com/", description: "Easy utility based CSS styling" },
]
</script>