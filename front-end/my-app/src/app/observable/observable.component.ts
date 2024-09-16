import { Component, OnInit } from '@angular/core';
import { Student } from '../../modules/student/models/student.model';
import { StudentService } from '../../modules/student/student.service';
import { from, interval, observable, Observable } from 'rxjs';
import {filter, map} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'observable',
  templateUrl: './observable.component.html',
})
export class ObservableComponent {
  students: Student[]=[]
  clock!:string
  timer!:string
  message:string[]=[]
  send!:Observable<string>
  send2!:Observable<string>
  sendEmail(){
    // this.send=new Observable((obs)=>{
    //   this.students.forEach(s => {
    //     obs.next("send succesfully to "+s.firstName)
    //   });
    // })
    // this.send.subscribe((val)=>this.message.push(val))

    this.send2=from(this.students).pipe(filter(s=>s.status==true),map(s=>"send succesfully to "+s.firstName))
    this.send2.subscribe((val)=>this.message.push(val))
  }


  //  source:Observable<string>=new Observable((observer)=>{
  //   this.students.forEach(s => {observer.next(s.firstName)
  //   });
  //  })

  time:Observable<string>=new Observable((observer)=>
  {
    setInterval(()=>observer.next((new Date).toLocaleTimeString()),1000)
  })

  time2:Observable<string>=interval(1000).pipe(map(x=>((new Date).toLocaleDateString())))


  



  constructor(private _studentServise: StudentService) {
   // this.students = _studentServise.getStudents();
   _studentServise.getStudentsFromServer().subscribe(data=>this.students= data)
   
    // this.source.subscribe((val)=>{console.log(val)}) 

    const studentObs: Observable<string> = from(this.students).pipe(map(s=> {return s.firstName;}));
    studentObs.subscribe((val) => { console.log(val); });

    this.time.subscribe((val)=>this.clock=val)

    this.time.subscribe(((val)=>this.timer=val))
  }
 

ngOnInit(): void {}
  
 
}