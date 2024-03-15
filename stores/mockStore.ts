import type { ChartData, ChartOptions } from "chart.js";
import { defineStore } from "pinia";

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
          label: "My First Dataset",
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
        legend: {
          display: false,
        },
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
      value: 100,
    };
  };

  const getKPI = (kpiId: string) => {
    switch (kpiId) {
      case "1":
        return getTotalUsers();
      case "2":
        return;
    }
  };

  const getKPITrend = (kpiId: string) => {
    switch (kpiId) {
      case "1":
        return getTotalUserTrend();
      case "2":
        return;
    }
  };

  const getKPIDetails = (kpiId: string) => {
    switch (kpiId) {
      case "1":
        return getTotalUsersDetail();
      case "2":
        return;
    }
  };

  return { getKPI, getKPITrend, getKPIDetails };
});
