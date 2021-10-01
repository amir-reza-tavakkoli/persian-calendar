import { Day } from "./day.js";

export class Month {
    constructor(day, name, length){
        this.start = day;
        this.length = length;
        this.name = name;
        this.days = new Array(this.length);
        this.build();
    }

    build() {
        //create days based on month name
        for (let index = 0; index < this.length; index++) {
            this.days[index] = new Day((this.start.name + index) % 7, this.start.number + index);
        }
    }

}