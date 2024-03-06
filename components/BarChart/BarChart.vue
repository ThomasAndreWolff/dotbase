<script setup lang="ts">
import type { ChartData, ChartOptions } from "chart.js";
import {
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
  BarElement,
} from "chart.js";
import { ref, watch } from "vue";
import { Bar } from "vue-chartjs";

export interface Props {
  chartData?: ChartData<"bar"> | any;
  chartOptions?: ChartOptions<"bar"> | any;
  chartId?: string;
  datasetIdKey?: string;
  plugins?: Array<any>;
  cssClasses?: string;
  styles?: Partial<CSSStyleDeclaration>;
  width?: number;
  height?: number;
}

ChartJS.register(Title, Tooltip, Legend, BarElement, LinearScale);
// chartjsPluginZoom

const props = withDefaults(defineProps<Props>(), {
  chartData: undefined,
  chartOptions: undefined,
  chartId: "line-chart",
  datasetIdKey: "label",
  plugins: () => [],
  cssClasses: "",
  styles: () => ({
    height: "200px",
    position: "relative",
  }),
});

const lineChart = ref();

watch(
  props.chartOptions,
  (value) => {
    if (lineChart.value.chart) lineChart.value.chart.update();
  },
  { deep: true }
);
</script>

<template>
  <div style="max-height: 200px">
    <Bar
      :options="chartOptions"
      :data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      ref="lineChart"
    />
  </div>
</template>
