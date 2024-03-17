import type { ChartData, ChartOptions } from "chart.js";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { defineStore } from "pinia";
import type { KPI } from "~/stores/userStore";

export const useMockStore = defineStore("mock", () => {
  const daysBetween = (from: string, to: string) => {
    const fromDate = dayjs(new Date(from)).startOf("day");
    const toDate = dayjs(new Date(to)).endOf("day");
    dayjs.extend(duration);
    const span = dayjs.duration(toDate.diff(fromDate)).asDays();
    const days = [];
    for (let i = 0; i <= span; i++) {
      days.push(dayjs(fromDate).add(i, "day").startOf("day").toISOString());
    }
    return days;
  };

  const getTotalUserData = () => {
    return Array.from({ length: 30 }, () => Math.floor(Math.random() * 10));
  };

  const getTotalUserLabels = () => {
    return daysBetween("01-Jan-2024", "30-Jan-2024");
  };

  const getTotalUsers = () => {
    const chartData: ChartData<"line"> = {
      labels: getTotalUserLabels(),
      datasets: [
        {
          label: "My First Dataset",
          data: getTotalUserData(),
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
        x: { display: false, type: "time" },
        y: { display: false },
      },
    };

    return { data: chartData, options: chartOptions };
  };

  const getTotalUsersDetail = () => {
    const chartData: ChartData<"line"> = {
      labels: getTotalUserLabels(),
      datasets: [
        {
          label: "Random Example Data",
          data: getTotalUserData(),
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
      scales: {
        x: { type: "time" },
        y: {},
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
