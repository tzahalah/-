import { SettingsModule } from './../modules/settings/settings.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { StudentDetailsComponent } from "src/modules/student/student-details/student-details.component";
import { StudentListComponent } from "src/modules/student/student-list/student-list.component";
import { ExamListComponent } from './exam-list/exam-list.component';
import { HomeComponent } from './home/home.component';
import { LoginGuardService } from './login/login-guard.service';
import { LoginComponent } from './login/login.component';


const App_Route: Route[] = [
    { path: "", component:HomeComponent, pathMatch:"full" },
    { path: "student-details", component:StudentDetailsComponent },
    { path: "home", component:HomeComponent },
    { path: "studentList", component: StudentListComponent },
    { path: "settings", loadChildren: ()=>import("../modules/settings/settings.module").then(m=>m.SettingsModule),canActivate:[LoginGuardService] },
    {path:"login", component:LoginComponent},
    { path: "**", component: ErrorPageComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(App_Route)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}