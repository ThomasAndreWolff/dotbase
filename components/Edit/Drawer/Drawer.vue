<script setup lang="ts">
interface Props {
  modelValue: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: true,
});

const emits = defineEmits(["update:modelValue"]);

const kpis = ref(useMockStore().getKPIs());
const { kpis: userKpis } = storeToRefs(useUserStore());

const shownKPIs = computed(() => {
  const userKpiIds = userKpis.value.map((kpi) => kpi.id);
  return kpis.value.filter(
    (kpi) =>
      !userKpiIds.includes(kpi.id) &&
      kpi.title.toLowerCase().includes(search.value.toLowerCase())
  );
});

const search = ref("");
</script>

<template>
  <v-navigation-drawer
    :modelValue="modelValue"
    @input="$emit('update:modelValue', modelValue)"
    location="right"
    permanent
    :width="400"
  >
    <v-list density="compact" nav>
      <v-text-field
        v-model="search"
        density="compact"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="solo-filled"
        flat
        hide-details
        single-line
        class="mb-2"
      ></v-text-field>
      <v-divider class="mb-2"></v-divider>
      <v-list-item v-for="kpi in shownKPIs">
        <status-card
          :id="kpi.id"
          :title="kpi.title"
          :color="kpi.color"
          :chartType="kpi.chartType"
          :edit="false"
          @click="() => useUserStore().addKPI(kpi)"
        />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
