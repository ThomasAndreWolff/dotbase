import type { ChartData, ChartOptions } from "chart.js";
import { defineStore } from "pinia";
import type { KPI } from "~/stores/userStore";

export const useMockStore = defineStore("mock", () => {
  const getKPICard = async (kpi: KPI) => {
    let resp = undefined;
    switch (kpi.id) {
      case "1":
        resp = await useFetch("/api/satisfaction");
        break;
      case "2":
        resp = await useFetch("/api/timeSaved");
        break;
      case "4":
        resp = await useFetch("/api/use");
        break;
      default:
        resp = await useFetch("/api/timeSaved");
        break;
    }

    const chartData: ChartData<"line"> = {
      labels: resp?.data.value?.label,
      datasets: [
        {
          label: kpi.title,
          data: resp?.data.value ? resp?.data.value?.data : [],
          borderColor: "rgb(255, 255, 255, 0.8)",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          fill: false,
          tension: 0.3,
        },
      ],
    };

    const chartOptions: ChartOptions<"line"> = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: { display: false, type: kpi.id !== "4" ? "time" : undefined },
        y: { display: false },
      },
    };

    return { data: chartData, options: chartOptions };
  };

  const getKPIDetail = async (kpi: KPI, darkTheme: boolean = true) => {
    let resp = undefined;

    switch (kpi.id) {
      case "1":
        resp = await useFetch("/api/satisfaction");
        break;
      case "2":
        resp = await useFetch("/api/timeSaved");
        break;
      case "4":
        resp = await useFetch("/api/use");
        break;
      default:
        resp = await useFetch("/api/timeSaved");
        break;
    }

    const chartData: ChartData<"line"> = {
      labels: resp?.data.value?.label,
      datasets: [
        {
          label: kpi.title,
          data: resp?.data.value ? resp?.data.value?.data : [],
          borderColor: darkTheme
            ? "rgb(255, 255, 255, 0.8)"
            : "rgb(0, 0, 0, 0.8)",
          backgroundColor: darkTheme
            ? "rgb(255, 255, 255, 0.8)"
            : "rgb(0, 0, 0, 0.8)",
          fill: false,
          tension: 0.3,
        },
      ],
    };

    const chartOptions: ChartOptions<"line"> = {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        point: {
          radius: 0,
        },
      },
      plugins: {
        filler: {
          propagate: true,
        },
        annotation: {},

        zoom: {
          zoom: {
            wheel: {
              enabled: true,
            },
            drag: {
              enabled: true,
            },
            mode: "x",
          },
        },
      },
      scales: {
        x: { type: kpi.id !== "4" ? "time" : undefined },
        y: {},
      },
    };

    return { data: chartData, options: chartOptions };
  };

  const getSatisfactionTrend = () => {
    return {
      percentage: "69%",
      value: "4.3",
      trend: "up",
    };
  };
  const getTimeSavedTrend = () => {
    return {
      percentage: "12%",
      value: "12h",
      trend: "up",
    };
  };
  const getUseTrend = () => {
    return {
      percentage: "27%",
      value: "25",
      trend: "down",
    };
  };
  const getCompletionTrend = () => {
    return {
      percentage: "5%",
      value: "75",
      trend: "up",
    };
  };

  const getKPITrend = (kpiId: string) => {
    switch (kpiId) {
      case "1":
        return getSatisfactionTrend();
      case "2":
        return getTimeSavedTrend();
      case "3":
        return getCompletionTrend();
      case "4":
        return getUseTrend();
      default:
        return;
    }
  };

  const getKPIs = async () => {
    const { data } = await useFetch("/api/kpis");
    return data.value as KPI[];
  };

  const getTableData = async () => {
    return await useFetch("/api/tableData");
  };

  return { getKPICard, getKPITrend, getKPIDetail, getKPIs, getTableData };
});
