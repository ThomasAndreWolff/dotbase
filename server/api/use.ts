export default defineEventHandler((event) => {
  return { data: getRevenueData(), label: getRevenueLabels() };
});

const getRevenueLabels = () => {
  return [
    "Patientenaufnahme",
    "OP-Planung",
    "Funktionsdiagnostik",
    "Entlassungsmanagement",
  ];
};

const getRevenueData = () => {
  return Array.from({ length: 4 }, () => Math.floor(Math.random() * 10));
};
