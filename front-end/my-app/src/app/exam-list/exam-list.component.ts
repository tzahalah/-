import { Component } from '@angular/core';
import { Exam } from '../../modules/student/models/exam.model';
import { StudentService } from '../../modules/student/student.service';

@Component({
  selector: 'exam-list',
  templateUrl: './exam-list.component.html',
  
})
export class ExamListComponent {
 // gradeAvg!:number;
exams:Exam[]=[{id:1,date:new Date(2024,4,6),description:"math",grade:90}]
constructor(private _studentService:StudentService){
  
}
}
