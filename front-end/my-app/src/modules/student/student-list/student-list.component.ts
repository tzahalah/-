

import { Component } from '@angular/core';

import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Student } from '../models/student.model';
import { StudentService } from '../student.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
})
export class StudentListComponent {

  students: Student[] = []
  selectedStudent!: Student;
  searchControl = new FormControl('');
  constructor(private _studentService: StudentService, private _route:Router) {
    _studentService.getStudentsFromServer().subscribe(val => this.students = val)
    this.searchControl.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe((res) => {
      if (res !== null)
         this._studentService.getStudentsFromServer().subscribe((data)=>
        this.students=data.filter(s => s.firstName.startsWith(res)))
      else  this._studentService.getStudentsFromServer().subscribe(val => this.students = val);
    })
    // this.students=_studentService.getStudents();
    //_studentService.getStudentsSlowly().then(studentList=>{
    // this.students=studentList;
    //})

  }
  ngOnInit(): void {
    // this._studentService.getStudentsSlowly();
    //this._studentService.getSumDaysMissing(1);
  }
  showDetails(studentToShow: Student) {
   
  // this.selectedStudent = studentToShow;
    this._route.navigate(["/student-details"], {state:{'st': studentToShow}})
   // this._route.navigate(["/student-details",studentToShow.id])
  }
  deleteStudent(student: Student) {
    console.log(student);
    this._studentService.deleteStudentFromServer(student.id);
    window.location.reload();
  }
  addNewStudent() {
    //this.selectedStudent = new Student();
    this._route.navigate(["/student-details"], {state:{'st': new Student}})
  }
  pushStudent(studentToInsert: Student) {
    
  }
  showByStatus(status: boolean) {
    if (status)
      this._studentService.getStudentsFromServer().subscribe((data) => this.students = data.filter(s => s.status))
    else
      this._studentService.getStudentsFromServer().subscribe((data) => this.students = data)
  }
   getSumDaysMiss(st:Student):number{
    return  this._studentService.getSumDaysMissing(st)
   }
}
