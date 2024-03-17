import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const kpis = ref<KPI[]>([]);

  const fetchUserKPIs = () => {
    kpis.value = [
      {
        id: "1",
        title: "Total Users",
        color: "indigo-darken-4",
        chartType: "line",
      },
      {
        id: "2",
        title: "Total Revenue",
        color: "blue-darken-1",
        chartType: "line",
      },
      {
        id: "3",
        title: "Total Users",
        color: "orange-darken-1",
        chartType: "bar",
      },
      {
        id: "4",
        title: "Total Users",
        color: "red-darken-1",
        chartType: "doughnut",
      },
    ] as KPI[];

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
