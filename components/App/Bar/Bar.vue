<script setup lang="ts">
import avatar from "@/assets/avatar.png";
import { useTheme } from "vuetify";

type DropDown = {
  title: string;
  value: number;
  props: {
    prependIcon: string;
  };
};

interface Props {
  modelValue: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
});

const dropDown = [
  {
    title: "Theme",
    value: 1,
    props: {
      prependIcon: "mdi-theme-light-dark",
    },
  },
  {
    title: "Einstellungen",
    value: 2,
    props: {
      prependIcon: "mdi-cog",
    },
  },
  {
    title: "Logout",
    value: 3,
    props: {
      prependIcon: "mdi-logout",
    },
  },
];

const theme = useTheme();

const onSelect = (link: DropDown) => {
  switch (link.value) {
    case 1:
      theme.global.name.value = theme.global.current.value.dark
        ? "light"
        : "dark";
  }
};
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

      <v-list :items="dropDown">
        <v-list-item
          v-for="link in dropDown"
          :key="link.value"
          :title="link.title"
          @click="onSelect(link)"
        >
          <template v-slot:prepend>
            <v-icon :icon="link.props.prependIcon"> </v-icon>
          </template>
        </v-list-item>
      </v-list>

      <!-- <v-list :items="dropDown" @click="onSelect(dropDown)"></v-list> -->
    </v-menu>
  </v-app-bar>
</template>
