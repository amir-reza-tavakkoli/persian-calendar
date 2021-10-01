export class Day {
    constructor(name, number){
        this.name = name;
        this.number = number;
    }

    getDay(){
        console.log(`I am ${this.name} number ${this.number}`);
        return this.name + this.number;
    }

}