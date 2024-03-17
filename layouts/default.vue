<template>
  <v-app>
    <app-nav v-model="drawer" />

    <app-bar v-model="drawer" />

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup>
const drawer = ref(true);
</script>
