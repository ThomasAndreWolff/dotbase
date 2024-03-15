<script setup lang="ts">
import type { KPI } from "~/stores/userStore";

interface Props {
  kpis: KPI[];
  modelValue?: KPI;
}

const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <v-row>
    <v-col lg="3" md="4" sm="6" v-for="kpi in kpis">
      <status-card
        :id="kpi.id"
        :title="kpi.title"
        :color="kpi.color"
        :chartType="kpi.chartType"
        @click="() => $emit('update:modelValue', kpi)"
      />
    </v-col>
  </v-row>
</template>
