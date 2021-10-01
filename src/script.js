import { Year } from "./Year.js";
import { Day } from "./day.js";
import {deploy} from "./deploy.js"

// Imagine first day of 1400 is sunday
let startDay = new Day(1, 1);
let startYear = new Year(1400, startDay);
console.log(startDay, startYear);
deploy(startYear);

export {startYear, startDay}