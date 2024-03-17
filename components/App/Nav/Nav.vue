<script setup lang="ts">
interface Props {
  modelValue: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
});

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
</script>

<template>
  <v-navigation-drawer
    :modelValue="modelValue"
    @input="$emit('update:modelValue', modelValue)"
  >
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
</template>
