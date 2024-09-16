export class Absence{
    dateBegin!:Date;
    numDays!:number;
    constructor(dateBegin: Date,numDays:number){
        this.dateBegin=dateBegin
        this.numDays=numDays
    }
}