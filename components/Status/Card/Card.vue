<script setup lang="ts">
import { useMockStore } from "~/stores/mockStore";

interface Props {
  id: string;
  title: string;
  color: string;
  chartType?: "line" | "doughnut" | "bar";
  edit?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  chartType: "bar",
  edit: false,
});

const chart = ref(useMockStore().getKPI(props.id));
const trend = ref(useMockStore().getKPITrend(props.id));

const emits = defineEmits(["remove"]);

const remove = () => {
  emits("remove");
};
</script>

<template>
  <v-card :color="props.color" style="height: 260px">
    <template v-slot:title>
      <v-row>
        <v-col cols="10" class="flex">
          <p class="text-2xl">
            {{ trend?.value }}
          </p>
          <p class="ml-2 text-base m-auto">
            (
            {{ trend?.percentage }}
            <v-icon
              icon="mdi-arrow-top-right"
              size="small"
              v-if="trend?.trend == 'up'"
            ></v-icon>
            <v-icon
              icon="mdi-arrow-bottom-left"
              size="small"
              v-if="trend?.trend == 'down'"
            ></v-icon>
            )
          </p>
        </v-col>
        <v-col cols="2" class="flex justify-end" v-if="edit">
          <v-btn
            size="x-small"
            icon="mdi-close"
            elevation="0"
            :color="props.color"
            @click="remove"
          ></v-btn>
        </v-col>
      </v-row>
    </template>

    <template v-slot:subtitle> {{ props.title }} </template>

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
