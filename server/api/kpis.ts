import { KPI } from "~/stores/userStore";

export default defineEventHandler((event) => {
  return [
    {
      id: "1",
      title: "Patient Satisfaction",
      color: "indigo-darken-4",
      chartType: "line",
    },
    {
      id: "2",
      title: "Time Saved in Report Generation",
      color: "blue-darken-1",
      chartType: "line",
    },
    {
      id: "3",
      title: "Completion Rate by Time",
      color: "orange-darken-1",
      chartType: "bar",
    },
    {
      id: "4",
      title: "Clinical Use by Time",
      color: "red-darken-1",
      chartType: "doughnut",
    },
  ] as KPI[];
});
