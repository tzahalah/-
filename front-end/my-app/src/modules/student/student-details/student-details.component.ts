

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { COURSES, Course } from '../models/course.model';
import { SchoolYear, Student } from '../models/student.model';
import { Absence } from '../models/absence.model';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent {

  courseList: Course[] = COURSES;
  courses = Object.values(Course);
  year = SchoolYear;
  

  public get _student(): Student { return this.student; }
  student!: Student;
  studentForm!: FormGroup;
  dateBegin!: Date;
  numDays!: number;
  totalMissingDays: number = 0;

  @Input()
  public set _student(student: Student) {
    this.student = student;
    if (student != undefined) {
      this.studentForm = this._fb.group({
        "id": new FormControl(this.student.id),
        "firstName": new FormControl(this.student.firstName, Validators.required),
        "lastName": new FormControl(this.student.lastName, Validators.required),
        "address": new FormControl(this.student.address),
        "course": new FormControl(this.student.course),
        "schoolYear": new FormControl(this.student.schoolYear),
        "gradeAvg": new FormControl(this.student.gradeAvg),
        "status": new FormControl(this.student.status),
        "leftDate": new FormControl(this.student.leftDate),
      
      })


    }

  }
constructor(private _fb: FormBuilder,private acr:ActivatedRoute,private _studentService:StudentService,private _route:Router) {
    const student=history.state['st'];
    console.log(student)
    this._student=student
 }
 
 @Output()
  onSaveStudent: EventEmitter<Student> = new EventEmitter();
  
  ngOnInit(): void {}

  saveStudent(student: Student) {
    //this.onSaveStudent.emit(student);
    console.log("hii")
    console.log(student);
    if (student.id === 0) {
     // student.id = this.students[this.students.length - 1].id + 1;
      this._studentService.postStudent(student);
      //this.students.push(studentToInsert);
    
    }

    else {
      // let index = this.students.findIndex(s => s.id === studentToInsert.id);
      // if (index !== -1)
      //this.students[index] = studentToInsert;
      this._studentService.putStudent(student.id, student,new Absence( this.dateBegin,this.numDays));

    }
   
this._route.navigate(["/studentList"])


  }
  getSumDaysMiss(st:Student):number{
   return  this._studentService.getSumDaysMissing(st)
  }

}
