<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item
          v-for="route in links"
          :key="route.icon"
          :prepend-icon="route.icon"
          :title="route.label"
          link
          router
          :to="route.to"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar scroll-behavior="elevate">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title><b>dotbase</b></v-app-bar-title>

      <v-spacer></v-spacer>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
        </template>

        <v-list :items="dropDown"></v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(null);

const links = [
  {
    label: "Home",
    icon: "mdi-home",
    to: "/",
  },
  {
    label: "Dashboard",
    icon: "mdi-view-dashboard",
    to: "/dashboard",
  },
  {
    label: "About",
    icon: "mdi-information-outline",
    to: "/about",
  },
];

const dropDown = [
  {
    title: "Edit",
    value: 1,
    props: {
      prependIcon: "mdi-view-dashboard-edit",
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
