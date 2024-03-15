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
          <h1>{{ title }}</h1>
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
    </v-container>
  </v-card>
</template>
