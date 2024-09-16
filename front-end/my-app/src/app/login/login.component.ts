import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 

  constructor(private _loginService:LoginService,private _router:Router){}
  updateId(){
    this._loginService.updateIdentity(true)
    this._router.navigate(["/settings"])
  }

  

}
