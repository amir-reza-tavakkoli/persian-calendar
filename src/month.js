import { Day } from "./day.js";

export class Month {
    constructor(day, name, length){
        this.start = day;
        this.length = length;
        this.name = name;
        this.days = new Array(this.length);
        this.build();
    }

    build(){
        for (let index = 0; index < this.length; index++) {
            this.days[index] = new Day((this.start.name + index) % 7, this.start.number + index);
        }
    }

    getDays(){
        for (let index = 0; index < this.length; index++) {
            console.log(days[i]);
        }
        return this.days;
    }
}