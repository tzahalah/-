import { Absence } from './models/absence.model';
import { filter, Observable, observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { Course, SchoolYear, Student } from "./models/student.model";
import { HttpClient, HttpParams } from "@angular/common/http";


const STUDENTS: Student[] = [
    // { id: 1, firstName: "tehila", lastName: "rayniz", address: "natanya", course: Course.software, schoolYear: SchoolYear.a, status: true, gradeAvg: 94, absence: [{ dateBegin: new Date(2024, 7, 9), numDays: 5 }] },
    { id: 2, firstName: "sara", lastName: "cohen", status: false, schoolYear: SchoolYear.b, leftDate: new Date(2024, 5, 6) },
    { id: 3, firstName: "lea", lastName: "levi", status: true, schoolYear: SchoolYear.b },
    { id: 4, firstName: "mali", lastName: "aharon", status: true, gradeAvg: 92 },
    { id: 5, firstName: "rina", lastName: "shalom", status: false, leftDate: new Date(2024, 3, 5) }]


@Injectable()
export class StudentService {

    constructor(private _http: HttpClient) { }



    getStudentsFromServer(): Observable<Student[]> {
        return this._http.get<Student[]>("/api/Student");
    }

    postStudent(student: Student): void {
        let gradeAvg = 0;
        let status = false
        if (student.gradeAvg)
            gradeAvg = student.gradeAvg
        if (student.status = true)
            status = true
        const studentToSend = {
            "id": student.id,
            "firstName": student.firstName,
            "lastName": student.lastName,
            "address": student.address,
            "course": student.course,
            "schoolYear": student.schoolYear,
            "gradeAvg": gradeAvg,
            "status": status,
            "leftDate": student.leftDate

        }
        this._http.post<Student>("api/Student", studentToSend).subscribe(
            () => {
                console.log("student added")
                window.location.reload();
            },
            err => console.log("error adding student", err)
        );
    }

    putStudent(id: number, student: Student, abs: Absence): void {
        let gradeAvg = 0;
        if (student.gradeAvg)
            gradeAvg = student.gradeAvg
        const studentToSend = {
            "id": student.id,
            "firstName": student.firstName,
            "lastName": student.lastName,
            "address": student.address,
            "course": student.course,
            "schoolYear": student.schoolYear,
            "gradeAvg": gradeAvg,
            "status": student.status,
            "leftDate": student.leftDate
        }
        console.log(abs.dateBegin)
        console.log(abs.numDays)
        if (abs.dateBegin != null) {

            const params = new HttpParams()
                .set('id', student.id.toString()) // שליחת ה-id כחלק מה-URL
                .set('dateBegin', new Date(abs?.dateBegin).toISOString() || '') // שליחת שדות ה-absence בפרמטרי השאילתה
                .set('numDays', abs?.numDays?.toString() || '');
            this._http.put("api/Student/" + id, studentToSend, { params }).subscribe(
                () => {
                    console.log("student updated")

                },
                err => console.log("error updating student", err)
            );
        }
        else
            this._http.put("api/Student/" + id, studentToSend).subscribe(
                () => {
                    console.log("student updated")

                },
                err => console.log("error updating student", err)
            );
    }


    deleteStudentFromServer(id: number): void {
        this._http.delete("api/Student/" + id).subscribe(
            () => console.log("student deleted"),
            err => console.log("error deleting student", err)
        );
    }



    getStudents(): Student[] {
        return STUDENTS;
    }

    getStudentsSlowly(): Promise<Student[]> {
        return new Promise((res, reg) => {
            setTimeout(() => { res(STUDENTS) }, 3000);
        });
    }

    // getGradeAvg(id: number): number {
    //     let student = STUDENTS.find(s => s.id === id);
    //     if (student && student.gradeAvg) return student?.gradeAvg;
    //     return 0;

    // }
    // getSumDaysMissing(id: number): Promise<number>
    // {
    //     let miss = 0
    //     let student
    //     let i = 0
    //     return new Promise((res, rej) => 
    //         {
    //         this.getStudentsFromServer().subscribe((data) =>
    //              {
    //             student = data.find(x => x.id === id)
    //             console.log(student)
    //             if (student != null && student.absence != null) {
                    
    //                 console.log(student.absence)
    //                 for (i = 0; i < 10; i++)
    //                     if (student.absence[i] != null)
    //                         miss += student.absence[i].numDays;
    //             }
    //                     else i = 10;
    //           })

    //         console.log(miss)
    //         res(miss);
    //     })
        
    // } 

    getSumDaysMissing(st: Student):number{
        let miss=0
        let i=0
        if (st!=null && st.absence!=null)
        {
            for(i=0; i<10; i++)
            {
                if(st.absence[i]!=null)
                    miss+=st.absence[i].numDays
            }

        }
        return miss;
    }
    
}