<script setup lang="ts">
import type { ChartData, ChartOptions } from "chart.js";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  TimeScale,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
import chartjsPluginAnnotation from "chartjs-plugin-annotation";
import chartjsPluginZoom from "chartjs-plugin-zoom";
import { ref, watch } from "vue";
import { Line } from "vue-chartjs";
import "chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm";

export interface Props {
  chartData?: ChartData<"line"> | any;
  chartOptions?: ChartOptions<"line"> | any;
  chartId?: string;
  datasetIdKey?: string;
  plugins?: Array<any>;
  cssClasses?: string;
  styles?: Partial<CSSStyleDeclaration>;
  width?: number;
  height?: number;
}

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  TimeScale,
  CategoryScale,
  chartjsPluginAnnotation,
  chartjsPluginZoom,
  Filler
);
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

const resetZoom = () => {
  if (lineChart.value.chart) lineChart.value.chart.resetZoom();
};

defineExpose({
  resetZoom,
});
</script>

<template>
  <div style="max-height: 200px">
    <Line
      :options="chartOptions"
      :data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      v-bind="$attrs"
      ref="lineChart"
    />
  </div>
</template>
