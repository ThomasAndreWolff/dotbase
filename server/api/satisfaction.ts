import daysBetween from "~/utils/getDaysBetween";

export default defineEventHandler((event) => {
  return { label: getTotalUserLabels(), data: getTotalUserData() };
});

const getTotalUserLabels = () => {
  return daysBetween("01-Jan-2024", "30-Jan-2024");
};

const getTotalUserData = () => {
  return Array.from({ length: 30 }, () => Math.floor(Math.random() * 10));
};
