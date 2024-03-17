<script setup lang="ts">
import avatar from "@/assets/avatar.png";

interface Props {
  modelValue: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
});

const dropDown = [
  {
    title: "Einstellungen",
    value: 1,
    props: {
      prependIcon: "mdi-cog",
    },
  },
  {
    title: "Logout",
    value: 1,
    props: {
      prependIcon: "mdi-logout",
    },
  },
];
</script>

<template>
  <v-app-bar scroll-behavior="elevate">
    <v-app-bar-nav-icon
      @click="$emit('update:modelValue', !modelValue)"
    ></v-app-bar-nav-icon>

    <v-app-bar-title><b>dotbase</b></v-app-bar-title>

    <v-spacer></v-spacer>

    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-avatar :image="avatar" class="mr-5" v-bind="props"></v-avatar>
      </template>

      <v-list :items="dropDown"></v-list>
    </v-menu>
  </v-app-bar>
</template>
