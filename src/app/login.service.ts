import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { }

  procesador: Boolean =false;
  proceed(){
    if(this.procesador){
      this.procesador= false;
      console.log(this.procesador)
    }else{
      this.procesador= true;
      console.log(this.procesador)
    }
  };
}
function proceed() {
  throw new Error('Function not implemented.');
}

