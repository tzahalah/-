import { Injectable } from '@angular/core';

@Injectable()
export class LoginService{
    isKnown:boolean=false
    updateIdentity(put:boolean){this.isKnown=put}
    get():boolean{return this.isKnown}

}