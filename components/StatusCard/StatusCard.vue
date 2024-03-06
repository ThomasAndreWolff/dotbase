<script setup lang="ts">
interface Props {
  title: string;
  color: string;
  value: number;
  trend: string;
  trendValue: number;
}

const props = defineProps<Props>();

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

const chartData = ref<ChartData<"line">>({
  labels: [...Array(10).keys()],
  datasets: [
    {
      label: props.title,
      data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 10000)),
      borderColor: "rgb(255, 255, 255)",
      fill: false,
    },
  ],
});
</script>

<template>
  <v-card color="primary" :title="props.value" :subtitle="props.title">
    <v-container>
      <v-row>
        <v-col>
          <LineChart :chart-data="chartData" :chart-options="chartOptions" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
