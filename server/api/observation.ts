import createObservation from "~/utils/createObservation";

const getTimestamp = (month: number = 1, day: number = 2) =>
  new Date(2024, month, day).toISOString();

export default defineEventHandler((event) => {
  const observations = [
    createObservation(1230, getTimestamp(1, 3), getTimestamp(1, 4)),
    createObservation(3421, getTimestamp(2, 5), getTimestamp(2, 6)),
  ];

  return observations;
});
