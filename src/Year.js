import { Day } from "./day.js";
import { Month } from "./month.js";

export class Year {
    constructor(number, day){
        this.number = number;
        this.startDay = day;
        this.isLeap = this.checkLeap(number);
        this.months = new Array(12);
    }

    checkLeap(number){
        let leapYears = [0,4,8,12,16,20,24,29,33,37,41,45,49,53,57,62,66,70,74,78,82,86,90,95,99,103,107,111,115,119,124];
        for (const year of leapYears) {
            if (number % 128 == year) return true;
        }

        return false;
    }

    build(){
        for (let index = 0; index < this.months.length; index++) {
            let thisMonthName = this.getMonthName(index);
            let thisMonthNumber = this.getMonthNumber(index);
            this.months.push(new Month(this.startDay, thisMonthName, thisMonthNumber));
            let nexMonthStart = this.startDay.name;
            this.startDay = new Day((nexMonthStart + thisMonthNumber) % 7, 1);
        }
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

    getMonthNumber(number){
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
}