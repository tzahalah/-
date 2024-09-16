import { NgModule } from '@angular/core';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { StudentService } from './student/student.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { ExamListComponent } from 'src/app/exam-list/exam-list.component';
import { ErrorPageComponent } from 'src/app/error-page/error-page.component';


const App_Route: Route[] = [
    { path: "", component:HomeComponent, pathMatch:"full" },
    { path: "student-details", component:StudentDetailsComponent },
    { path: "home", component:HomeComponent },
    { path: "studentList", component: StudentListComponent },
    { path: "aaa", component: ExamListComponent },
    { path: "**", component: ErrorPageComponent }
]


@NgModule({
    declarations:[StudentListComponent, StudentDetailsComponent],
    imports:[BrowserModule, FormsModule, ReactiveFormsModule,HttpClientModule,CommonModule],
    providers:[StudentService],
    exports:[StudentListComponent, StudentDetailsComponent]
})
export class StudentModule{

}