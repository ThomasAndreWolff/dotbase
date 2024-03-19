import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const kpis = ref<KPI[]>([]);

  const fetchUserKPIs = async () => {
    const { data } = await useFetch("/api/userKpis");
    kpis.value = data.value as KPI[];
    return kpis.value;
  };

  const removeKPI = (id: string) => {
    kpis.value = kpis.value.filter((kpi) => kpi.id !== id);
  };

  const addKPI = (kpi: KPI) => {
    kpis.value.push(kpi);
  };

  return { kpis, fetchUserKPIs, removeKPI, addKPI };
});

export interface KPI {
  id: string;
  title: string;
  color: string;
  chartType: "line" | "bar" | "doughnut";
}
