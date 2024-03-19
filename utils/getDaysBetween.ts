import dayjs from "dayjs";
import * as duration from "dayjs/plugin/duration";

const daysBetween = (from: string, numberDays: number) => {
  const fromDate = dayjs(new Date(from)).startOf("day");
  const days = [];
  for (let i = 0; i <= numberDays; i++) {
    days.push(dayjs(fromDate).add(i, "day").startOf("day").toISOString());
  }
  return days;
};

export default daysBetween;
