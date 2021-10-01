import { Year } from "./Year.js";
import { Day } from "./day.js";
let startDay = new Day(1, 1);
let startYear = new Year(1400, startDay);
console.log(startDay, startYear);

export {startYear, startDay};