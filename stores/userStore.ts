import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const getUserKPIs = () =>
    [
      {
        id: "1",
        title: "Total Users",
        color: "indigo-darken-4",
        chartType: "line",
      },
      {
        id: "1",
        title: "Total Revenue",
        color: "blue-darken-1",
        chartType: "line",
      },
      {
        id: "1",
        title: "Total Users",
        color: "orange-darken-1",
        chartType: "bar",
      },
      {
        id: "1",
        title: "Total Users",
        color: "red-darken-1",
        chartType: "doughnut",
      },
    ] as KPI[];

  return { getUserKPIs };
});

export interface KPI {
  id: string;
  title: string;
  color: string;
  chartType: "line" | "bar" | "doughnut";
}
