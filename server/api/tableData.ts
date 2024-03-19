import daysBetween from "~/utils/getDaysBetween";

export default defineEventHandler((event) => {
  return { headers: getTableHeaders(), items: getTableItems() };
});

const getTableHeaders = () => {
  return [
    { title: "Prozess", value: "process", sortable: true, key: "process" },
    {
      title: "Aktive Prozesse",
      value: "active",
      sortable: true,
      key: "active",
    },
    {
      title: "Letzte Ausführung",
      value: "lastExecute",
      sortable: true,
      key: "lastExecute",
    },
    {
      title: "Durchschnittliche Dauer",
      value: "averageDuration",
      sortable: true,
      key: "averageDuration",
    },
  ];
};

const getTableItems = () => {
  return [
    {
      process: "Patientenaufnahme",
      active: "12",
      lastExecute: new Date("2024-02-01").toLocaleDateString(),
      averageDuration: "1h 30m",
    },
    {
      process: "OP-Planung",
      active: "15",
      lastExecute: new Date("2024-03-01").toLocaleDateString(),
      averageDuration: "30m",
    },
    {
      process: "Funktionsdiagnostik",
      active: "8",
      lastExecute: new Date("2024-04-01").toLocaleDateString(),
      averageDuration: "2h 30m",
    },
    {
      process: "Entlassungsmanagement",
      active: "2",
      lastExecute: new Date("2024-05-01").toLocaleDateString(),
      averageDuration: "1h",
    },
  ];
};
