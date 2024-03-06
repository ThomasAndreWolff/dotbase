<script setup lang="ts">
import type { ChartData, ChartOptions } from "chart.js";

interface KPI {
  title: string;
  value: number;
  color: string;
  trend: "up" | "down";
  trendValue: number;
  chartType: "line" | "bar" | "doughnut";
}

const chartData = ref<ChartData<"line">>({
  labels: [...Array(40).keys()],
  datasets: [
    {
      label: "My First Dataset",
      data: Array.from({ length: 40 }, () => Math.floor(Math.random() * 10)),
      borderColor: "rgb(75, 192, 192)",
      fill: false,
      tension: 0.3,
    },
    {
      label: "My First Dataset",
      data: Array.from({ length: 40 }, () => Math.floor(Math.random() * 10)),
      borderColor: "green",
      fill: true,
      tension: 0.3,
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
          value: 5,
          borderDash: [4, 2],
          borderColor: "red",
        },
      },
    },
    legend: {
      display: false,
    },
    zoom: {
      zoom: {
        wheel: {
          enabled: true,
        },
        drag: {
          enabled: true,
        },
        mode: "x",
      },
    },
  },
});

const kpis = ref<KPI[]>([
  {
    title: "Total Users",
    value: 100,
    color: "primary",
    trend: "up",
    trendValue: 10,
    chartType: "line",
  },
  {
    title: "Total Users",
    value: 100,
    color: "primary",
    trend: "up",
    trendValue: 10,
    chartType: "line",
  },
  {
    title: "Total Users",
    value: 100,
    color: "primary",
    trend: "up",
    trendValue: 10,
    chartType: "bar",
  },
  {
    title: "Total Users",
    value: 100,
    color: "primary",
    trend: "up",
    trendValue: 10,
    chartType: "doughnut",
  },
]);
</script>

<template>
  <v-container>
    <v-row>
      <v-col lg="3" md="4" sm="6" v-for="kpi in kpis">
        <StatusCard
          :title="kpi.title"
          :value="kpi.value"
          :color="kpi.color"
          :trend="kpi.trend"
          :trendValue="kpi.trendValue"
          :chartType="kpi.chartType"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h1>Total Users</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <LineChart
          :chart-data="chartData"
          :chart-options="chartOptions2"
          style="position: relative; height: 500px; max-height: 500px"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
