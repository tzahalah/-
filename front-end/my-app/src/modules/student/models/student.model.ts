import { Absence } from "./absence.model";


export class Student{
    id!: number;
    firstName!:string;
    lastName!:string;
    address?:string;
    course?:Course;
    schoolYear?:SchoolYear;
    gradeAvg?:number;
    status?:boolean;
    leftDate?:Date;
     absence?:Absence[];

    constructor(){
        this.id=0;
        this.status=true;
        this.gradeAvg=0;
    }
}
export enum SchoolYear{
    a,b,c
}

export enum Course{
    "teaching", "software", "architecture"
}