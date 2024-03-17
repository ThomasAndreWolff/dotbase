<script setup lang="ts">
import type { Chart } from "chart.js";

interface Props {
  title: string;
  kpi: KPI;
}

const props = withDefaults(defineProps<Props>(), {});
const chart = ref(useMockStore().getKPIDetails(props.kpi.id));
const lineChart = ref();
</script>

<template>
  <v-card>
    <v-container>
      <v-row>
        <v-col class="flex">
          <p class="text-4xl font-semibold">{{ title }}</p>
          <v-spacer />
          <v-btn icon elevation="0" @click="lineChart?.resetZoom()">
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row v-if="kpi.chartType == 'line' && chart">
        <v-col>
          <chart-line
            ref="lineChart"
            :chart-data="chart?.data"
            :chart-options="chart?.options"
            style="position: relative; height: 500px; max-height: 500px"
          />
        </v-col>
      </v-row>
      <v-row v-if="kpi.chartType == 'bar' && chart">
        <v-col>
          <chart-bar
            :chart-data="chart?.data"
            :chart-options="chart?.options"
            style="position: relative; height: 500px; max-height: 500px"
          />
        </v-col>
      </v-row>
      <v-row v-if="kpi.chartType == 'doughnut' && chart">
        <v-col>
          <chart-doughnut
            :chart-data="chart?.data"
            :chart-options="chart?.options"
            style="position: relative; height: 500px; max-height: 500px"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
