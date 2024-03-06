<script setup lang="ts">
import type { ChartData, ChartOptions } from "chart.js";

console.log(Array(10).map(() => Math.floor(Math.random() * 100)));
const chartData = ref<ChartData<"line">>({
  labels: [...Array(40).keys()],
  datasets: [
    {
      label: "My First Dataset",
      data: Array.from({ length: 40 }, () => Math.floor(Math.random() * 40)),
      borderColor: "rgb(75, 192, 192)",
      fill: false,
    },
    {
      label: "My First Dataset",
      data: Array.from({ length: 40 }, () => Math.floor(Math.random() * 40)),
      borderColor: "rgb(255, 255, 255)",
      fill: true,
    },
  ],
});

const chartOptions = ref<ChartOptions<"line">>({
  responsive: true,
  maintainAspectRatio: false,
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

const chartOptions2 = ref<ChartOptions<"line">>({
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    point: {
      radius: 0,
    },
  },
  plugins: {
    filler: {
      propagate: true,
    },
    annotation: {
      annotations: {
        line: {
          type: "line",
          borderWidth: 1,
          scaleID: "y",
          value: 10,
          borderDash: [4, 2],
          borderColor: "red",
        },
      },
    },
    legend: {
      display: false,
    },
  },
});

const kpis = ref([
  {
    title: "Total Users",
    value: 100,
    color: "primary",
    trend: "up",
    trendValue: 10,
  },
  {
    title: "Total Users",
    value: 100,
    color: "primary",
    trend: "up",
    trendValue: 10,
  },
  {
    title: "Total Users",
    value: 100,
    color: "primary",
    trend: "up",
    trendValue: 10,
  },
  {
    title: "Total Users",
    value: 100,
    color: "primary",
    trend: "up",
    trendValue: 10,
  },
]);
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="3" v-for="kpi in kpis">
        <StatusCard :title="kpi.title" :value="kpi.value" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h1>Home</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <LineChart :chart-data="chartData" :chart-options="chartOptions" />
      </v-col>
    </v-row>
  </v-container>
</template>
