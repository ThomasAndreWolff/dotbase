import type { ChartData, ChartOptions } from "chart.js";
import { defineStore } from "pinia";
import type { KPI } from "~/stores/userStore";

export const useMockStore = defineStore("mock", () => {
  const getTotalUsers = () => {
    const chartData: ChartData<"line"> = {
      labels: [...Array(40).keys()],
      datasets: [
        {
          label: "My First Dataset",
          data: Array.from({ length: 40 }, () =>
            Math.floor(Math.random() * 10)
          ),
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
        x: { display: false },
        y: { display: false },
      },
    };

    return { data: chartData, options: chartOptions };
  };

  const getTotalUsersDetail = () => {
    const chartData: ChartData<"line"> = {
      labels: [...Array(40).keys()],
      datasets: [
        {
          label: "Random Example Data",
          data: Array.from({ length: 40 }, () =>
            Math.floor(Math.random() * 10)
          ),
          borderColor: "rgb(0, 0, 0, 0.8)",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
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
    };

    return { data: chartData, options: chartOptions };
  };

  const getTotalUserTrend = () => {
    return {
      percentage: "69%",
      value: "26K",
      trend: "up",
    };
  };

  const getKPI = (kpiId: string) => {
    switch (kpiId) {
      case "1":
      case "2":
      case "3":
      case "4":
        return getTotalUsers();
      default:
        return;
    }
  };

  const getKPITrend = (kpiId: string) => {
    switch (kpiId) {
      case "1":
      case "2":
      case "3":
      case "4":
        return getTotalUserTrend();
      default:
        return;
    }
  };

  const getKPIDetails = (kpiId: string) => {
    switch (kpiId) {
      case "1":
      case "2":
      case "3":
      case "4":
        return getTotalUsersDetail();
      default:
        return;
    }
  };

  const getKPIs = (): KPI[] => {
    return [
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
  };

  return { getKPI, getKPITrend, getKPIDetails, getKPIs };
});
