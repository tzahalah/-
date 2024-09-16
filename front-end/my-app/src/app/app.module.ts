import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { ExamListComponent } from './exam-list/exam-list.component';
import { StudentService } from "../modules/student/student.service";
import { ObservableComponent } from './observable/observable.component';
import { CheckComponent } from './check/check.component';
import { HttpClientModule } from "@angular/common/http";
import { StudentModule } from "src/modules/student.module";
import { ErrorPageComponent } from './error-page/error-page.component';
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { LoginService } from "./login/login.service";
import { LoginComponent } from "./login/login.component";
import { DirDirective } from "./dir.directive";


@NgModule({
    declarations:[AppComponent,  ExamListComponent, ObservableComponent, CheckComponent, ErrorPageComponent, HomeComponent, LoginComponent,DirDirective],
    imports:[BrowserModule, FormsModule, ReactiveFormsModule,HttpClientModule,StudentModule,AppRoutingModule],
    providers:[StudentService,LoginService],
    bootstrap:[AppComponent]
})
export class AppModule{

}