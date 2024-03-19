import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

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

export default daysBetween;
