import daysBetween from "~/utils/getDaysBetween";

export default defineEventHandler((event) => {
  return { label: getRevenueLabels(), data: getRevenueData() };
});

const getRevenueLabels = () => {
  return daysBetween("01-Jan-2024", 30);
};

const getRevenueData = () => {
  return Array.from({ length: 30 }, () => Math.floor(Math.random() * 10));
};
