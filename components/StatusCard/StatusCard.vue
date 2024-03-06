<script setup lang="ts">
import type { ChartData, ChartOptions } from "chart.js";

interface Props {
  title: string;
  color: string;
  value: number;
  trend: string;
  trendValue: number;
  chartType?: "line" | "doughnut" | "bar";
}

const props = withDefaults(defineProps<Props>(), {
  chartType: "bar",
});

const chartOptions = ref<ChartOptions<"line">>({
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 1,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: { display: false },
    y: { display: false },
  },
});

const chartData = ref<ChartData<"line", number[]>>({
  labels: [...Array(10).keys()],
  datasets: [
    {
      label: props.title,
      data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 10000)),
      backgroundColor: "rgb(255, 255, 255)",
      borderColor: "rgb(223, 223, 223)",
      fill: false,
      borderWidth: 1,
    },
  ],
});
</script>

<template>
  <v-card color="primary" :title="props.value" :subtitle="props.title">
    <v-container>
      <v-row>
        <v-col v-if="chartType === 'line'">
          <LineChart :chart-data="chartData" :chart-options="chartOptions" />
        </v-col>
        <v-col v-if="chartType === 'doughnut'">
          <DoughnutChart
            :chart-data="chartData"
            :chart-options="chartOptions"
            style="height: 200px"
          />
        </v-col>
        <v-col v-if="chartType === 'bar'">
          <BarChart :chart-data="chartData" :chart-options="chartOptions" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
