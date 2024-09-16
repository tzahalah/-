import { Component } from "@angular/core";
import { Student } from "../modules/student/models/student.model";
import { Observable, Subject } from "rxjs";
@Component({
    templateUrl: "app.component.html",
    selector: "app-root",
    styleUrls:['app.component.scss']
})
export class AppComponent {
    title: string = "hello world"
    time!: string;
    selectedStudent!: Student;
    private directionSubject = new Subject<string>()
    direction$ = this.directionSubject.asObservable()
    setDirection(dir: string): void {
        this.directionSubject.next(dir);
    }

    constructror() {

    }
    getTime(): string {
        let now = new Date().getHours();
        if (now < 6) return "good-night!!"
        if (now < 12) return "good-mornning!!"
        if (now < 18) return "good-afternoon!!"
        return "good-evenning!!"
    }
}