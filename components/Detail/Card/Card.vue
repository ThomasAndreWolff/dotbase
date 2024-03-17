<script setup lang="ts">
interface Props {
  title: string;
  kpi: KPI;
}

const props = withDefaults(defineProps<Props>(), {});
const chart = ref(useMockStore().getKPIDetails(props.kpi.id));
</script>

<template>
  <v-card>
    <v-container>
      <v-row>
        <v-col>
          <p class="text-4xl font-semibold">{{ title }}</p>
        </v-col>
      </v-row>
      <v-row v-if="kpi.chartType == 'line' && chart">
        <v-col>
          <chart-line
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
