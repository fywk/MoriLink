import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import isLeapYear from "dayjs/plugin/isLeapYear";
import utc from "dayjs/plugin/utc";

dayjs.extend(isBetween);
dayjs.extend(isLeapYear);
dayjs.extend(utc);

export default dayjs;
