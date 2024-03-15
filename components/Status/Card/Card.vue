<script setup lang="ts">
import type { ChartData, ChartOptions } from "chart.js";
import { useMockStore } from "~/stores/mockStore";

interface Props {
  id: string;
  title: string;
  color: string;
  chartType?: "line" | "doughnut" | "bar";
}

const props = withDefaults(defineProps<Props>(), {
  chartType: "bar",
});

const chart = ref(useMockStore().getKPI(props.id));
const trend = ref(useMockStore().getKPITrend(props.id));
</script>

<template>
  <v-card
    :color="props.color"
    :title="trend?.value"
    :subtitle="props.title"
    style="height: 260px"
  >
    <v-container>
      <v-row>
        <v-col v-if="chartType === 'line'">
          <chart-line
            :chart-data="chart?.data"
            :chart-options="chart?.options"
          />
        </v-col>
        <v-col v-if="chartType === 'doughnut'">
          <chart-doughnut
            :chart-data="chart?.data"
            :chart-options="chart?.options"
          />
        </v-col>
        <v-col v-if="chartType === 'bar'">
          <chart-bar
            :chart-data="chart?.data"
            :chart-options="chart?.options"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
