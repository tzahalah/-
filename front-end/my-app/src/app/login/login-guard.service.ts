import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {
  isKnown:boolean=false
  constructor(private _loginService:LoginService, private _router:Router) { }
  canActivate():boolean {
    const c= this._loginService.get()
    if(c==false) this._router.navigate(["/login"])
    return c;
  }
}
