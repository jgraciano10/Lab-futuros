import { SafeCall } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-feeedback',
  templateUrl: './feeedback.component.html',
  styleUrls: ['./feeedback.component.css']
})
export class FeeedbackComponent {
  
  constructor(private router:Router){

  }

  botonActiveP:boolean=false;
  botonActiveQ:boolean = false;
  botonActiveR:boolean = false;
  botonActiveS:boolean = false;
  asuntoEmail:string = "";
  cuerpoEmail:string = "";
  mostrarFormulario:boolean = false;
  

  activarBoton(action:string){
    this.mostrarFormulario=true;
    switch (action){
      case 'Peticion':
        this.botonActiveP=true;
        this.botonActiveQ = false;
        this.botonActiveR = false;
        this.botonActiveS = false;
        this.asuntoEmail= action;
        break;
      case 'Queja':
        this.botonActiveP= false;
        this.botonActiveQ = true;
        this.botonActiveR = false;
        this.botonActiveS = false;
        this.asuntoEmail= action;
        break;  
      case 'Reclamo':
        this.botonActiveP= false;
        this.botonActiveQ = false;
        this.botonActiveR = true;
        this.botonActiveS = false;
        this.asuntoEmail= action;
        break;  
          
      case 'Sugerencia':
        this.botonActiveP= false;
        this.botonActiveQ = false;
        this.botonActiveR = false;
        this.botonActiveS = true;
        this.asuntoEmail= action;
        break;    

    }

  }
  
 
  sendEmail() {
    
    alert(this.asuntoEmail)
    alert(this.cuerpoEmail)
    const emailTo = 'graciano.inluencia@gmail.com';
    const subject = this.asuntoEmail;
    const body = this.cuerpoEmail;

    const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  }


  
}

;

