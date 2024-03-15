<script setup lang="ts">
import type { ChartData, ChartOptions } from "chart.js";

import { useUserStore, type KPI } from "@/stores/userStore";

const selectedKPI = ref<KPI>();
</script>

<template>
  <v-container>
    <div>{{ selectedKPI?.title }}</div>
    <status-group :kpis="useUserStore().getUserKPIs()" v-model="selectedKPI" />
    <v-row v-if="selectedKPI">
      <v-col>
        <detail-card :title="selectedKPI.title" :kpi="selectedKPI" />
      </v-col>
    </v-row>
  </v-container>
</template>
