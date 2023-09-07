import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { ReservasService } from '../reservas.service';
import { espacioPromocionado } from '../espacioPromocionado.model';
import { PromocionarService } from '../promocionar.service';
import { LoginService } from '../login.service';
import { persona } from '../persona.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent {
  imagenURL: SafeResourceUrl;
  constructor(public usuariosservice: UsuariosService,
              public reservado:ReservasService,
              public PromocionarEspacio: PromocionarService,
              public login: LoginService,
              private sanitizer: DomSanitizer){
                this.imagenURL = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/espacio1.png');
             }


  /* mostrar espacios de acuerdo al dia*/
  mostrarEspacioLunes:boolean = true;
  mostrarEspacioMartes:boolean = false;
  mostrarEspacioMiercoles:boolean = false;
  mostrarEspacioJueves:boolean = false;
  mostrarEspacioViernes:boolean = false;
  
  mostrarEspacio(dia:string){
    if(dia==="Lunes"){
      if(this.mostrarEspacioLunes===false){
        this.mostrarEspacioLunes=true;
        console.log(this.mostrarEspacioLunes)
      }else{
        this.mostrarEspacioLunes=false;
        console.log(this.mostrarEspacioLunes)
      }
      
    }else if(dia==="Martes"){
      if(this.mostrarEspacioMartes===false){
        this.mostrarEspacioMartes=true;
        console.log(this.mostrarEspacioMartes)
      }else{
        this.mostrarEspacioMartes=false;
        console.log(this.mostrarEspacioMartes)
      }
    }else if(dia==="Miercoles"){
      if(this.mostrarEspacioMiercoles===false){
        this.mostrarEspacioMiercoles=true;
        console.log(this.mostrarEspacioMiercoles)
      }else{
        this.mostrarEspacioMiercoles=false;
        console.log(this.mostrarEspacioMiercoles)
      }
    }else if(dia==="Jueves"){
      if(this.mostrarEspacioJueves===false){
        this.mostrarEspacioJueves=true;
        console.log(this.mostrarEspacioJueves)
      }else{
        this.mostrarEspacioJueves=false;
        console.log(this.mostrarEspacioJueves)
      }
    }else if(dia==="Viernes"){
      if(this.mostrarEspacioViernes===false){
        this.mostrarEspacioViernes=true;
        console.log(this.mostrarEspacioViernes)
      }else{
        this.mostrarEspacioViernes=false;
        console.log(this.mostrarEspacioViernes)
      }
    }
  }
  
  /*funcion para inicar reserva el dia lunes*/
  iniciarReserva(){
    this.reservado.IniciarReservaLunes1espacio = true;
  }
  /*Funciones para finalizar reservar el dia lunes*/ 
  primerEspacioLunes(){
    this.reservado.reservadoLunes1espacio = true;

  }


  // funcion para almacenar un espacio promocionado
 
  promocionar(equipo:string, dia:string){
    this.usuariosservice.usuario.forEach(elemento =>{
      if(this.usuariosservice.nameOnScreen===elemento.name){
        this.PromocionarEspacio.reservado.push(new espacioPromocionado(elemento.name, elemento.email, elemento.password, dia, equipo))
        
        console.log(elemento)
        console.log(this.PromocionarEspacio.reservado)
      }
    })
    console.log("Promocionado")
  }
  


}
