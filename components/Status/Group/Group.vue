<script setup lang="ts">
import type { KPI } from "~/stores/userStore";

interface Props {
  kpis: KPI[];
  modelValue?: KPI;
  edit?: boolean;
}

const props = withDefaults(defineProps<Props>(), {});
const emit = defineEmits(["update:modelValue", "remove"]);

const remove = (kpi: KPI) => {
  emit("remove", kpi);
};
</script>

<template>
  <v-row>
    <v-col lg="3" md="4" sm="6" v-for="kpi in kpis">
      <status-card
        :id="kpi.id"
        :title="kpi.title"
        :color="kpi.color"
        :chartType="kpi.chartType"
        @click="() => (!edit ? $emit('update:modelValue', kpi) : null)"
        @remove="remove(kpi)"
        :edit="edit"
      />
    </v-col>
  </v-row>
</template>
