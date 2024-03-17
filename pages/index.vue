<script setup lang="ts">
import { useUserStore, type KPI } from "@/stores/userStore";

const selectedKPI = ref<KPI>();
const edit = ref(false);

onBeforeMount(() => {
  useUserStore().fetchUserKPIs();
});

const { kpis: userKpis } = storeToRefs(useUserStore());
</script>

<template>
  <edit-drawer v-model="edit" />
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-container>
            <v-row>
              <v-col cols="11">
                <p class="text-4xl font-semibold">Dashboard</p>
              </v-col>
              <v-col cols="1" class="flex justify-end">
                <v-btn
                  icon="mdi-view-dashboard-edit"
                  elevation="0"
                  @click="edit = !edit"
                ></v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>

    <status-group
      :kpis="userKpis"
      v-model="selectedKPI"
      :edit="edit"
      @remove="(kpi) => useUserStore().removeKPI(kpi.id)"
    />
    <v-row v-if="selectedKPI">
      <v-col>
        <detail-card :title="selectedKPI.title" :kpi="selectedKPI" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <data-table title="Data Table " />
      </v-col>
    </v-row>
  </v-container>
</template>
