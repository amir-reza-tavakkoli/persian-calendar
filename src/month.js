import { Day } from "./day.js";

export class Month {
    constructor(day, name, length){
        this.start = day;
        this.length = length;
        this.name = name;
        this.days = new Array(this.length);
    }

    build(){
        for (let index = 0; index < this.length; index++) {
            days.push(new Day((this.start.name + i) % 7, this.start.number + i));
        }
    }

    getDays(){
        for (let index = 0; index < this.length; index++) {
            console.log(days[i]);
        }
        return this.days;
    }
}