import { Day } from "./day.js";
import { Month } from "./month.js";

export class Year {
    constructor(number, day){
        this.number = number;
        this.startDay = new Day(day.name, day.number)
        // this.startDay.numbe = day.number;
        this.isLeap = this.checkLeap(number);
        this.months = new Array(12);
        this.build();
    }

    checkLeap(number){
        let leapYears = [0 ,4 ,8 ,12 ,16 ,20 ,24 ,29 ,33 ,37 ,41 ,45 ,49 ,53 ,57 ,62 ,66 ,70 ,74 ,78 ,82 ,86 ,90 ,95 ,99 ,103 ,107 ,111 ,115 ,119 ,124];
        for (const year of leapYears) {
            if ((number % 128) == year) return true;
        }

        return false;
    }

    build(){
        for (let index = 1; index < 13; index++) {
            let thisMonthName = this.getMonthName(index);
            let thisMonthLength = this.getMonthLength(index);

            this.months[index] = new Month(this.startDay, thisMonthName, thisMonthLength);

            let nexMonthStart = this.startDay.name;
            this.startDay = new Day(this.getNextDayName(nexMonthStart, thisMonthLength), 1);
        }
    }

    getNextDayName(name, length){
        // return length2;
        let j;
        if (length == 28) j = name;
        else if (length == 29) j = name + 1;
        else if (length == 30) j = name + 2;
        else if (length == 31) j = name + 3;
        return j % 7;
    }

    getMonthName(number){
        switch (number) {
            case 1:
                return "farvardin";
                break;
            case 2:
                return "ordibehesht";
                break;
            case 3:
                return "khordad";
                break;
            case 4:
                return "tir";
                break;
            case 5:
                return "mordad";
                break;
            case 6:
                return "shahrivar";
                break;
            case 7:
                return "mehr";
                break;
            case 8:
                return "aban";
                break;
            case 9:
                return "azar";
                break;
            case 10:
                return "dey";
                break;
            case 11:
                return "bahmann";
                break;
            case 12:
                return "esfand";
                break;
        }
    }

    getMonthLength(number){
        switch (number) {
            case 1:
                return 31;
                break;
            case 2:
                return 31;
                break;
            case 3:
                return 31;
                break;
            case 4:
                return 31;
                break;
            case 5:
                return 31;
                break;
            case 6:
                return 31;
                break;
            case 7:
                return 30;
                break;
            case 8:
                return 30;
                break;
            case 9:
                return 30;
                break;
            case 10:
                return 30;
                break;
            case 11:
                return 30;
                break;
            case 12:
                if (this.isLeap) return 29;
                return 28;
                break;
        }
    }
    getLastDay(){
        return this.months[-1][-1];
    }
}