<script setup lang="ts">
import type { VDataTable } from "vuetify/components";

type ReadonlyHeaders = VDataTable["$props"]["headers"];

interface Props {
  title: string;
  headers?: ReadonlyHeaders;
  items?: any[];
}

const props = withDefaults(defineProps<Props>(), {
  title: "",
  headers: () => [],
  items: () => [],
});

const search = ref("");
</script>

<template>
  <v-card>
    <template v-slot:title>
      <p class="text-4xl font-semibold">{{ title }}</p>
    </template>
    <template v-slot:text>
      <v-text-field
        v-model="search"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
      ></v-text-field>
    </template>
    <v-container>
      <v-row>
        <v-col>
          <v-data-table
            :headers="headers"
            :items="items"
            :search="search"
          ></v-data-table
        ></v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
