import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { ReservasService } from '../reservas.service';
import { espacioPromocionado } from '../espacioPromocionado.model';
import { PromocionarService } from '../promocionar.service';
import { LoginService } from '../login.service';
import { persona } from '../persona.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ReservasMartesService } from '../reservas-martes.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent {
  imagenURL: SafeResourceUrl;
  mensajeAMostrar:string=""
  constructor(public usuariosservice: UsuariosService,
              public reservado:ReservasService,
              public reservado2: ReservasMartesService,
              public PromocionarEspacio: PromocionarService,
              public login: LoginService,
              private sanitizer: DomSanitizer,
              public alert: AlertService){
                this.imagenURL = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/espacio1.png');
                
                
             }

 caracteristicasEspacios(espacio:string){
  switch(espacio){
    case 'Percepción':
      this.mensajeAMostrar= 'Percepción'
      this.alert.alertOn = true;
      break;
    case 'Creación':
      this.mensajeAMostrar= 'Creación'
      this.alert.alertOn = true;
      break; 
    case 'Conexión':
      this.mensajeAMostrar= 'Conexión'
      this.alert.alertOn = true;
      break;   
  }
 }             

 mostrarEspacio(dia:string){
  if(dia==="Lunes"){
    if(this.mostrarEspacioLunes===false){
        this.mostrarEspacioLunes=true;
        this.mostrarEspacioMartes=false;
        this.mostrarEspacioMiercoles=false;
        this.mostrarEspacioJueves=false;
        this.mostrarEspacioViernes=false;
        
                  
   }       
  }else if(dia==="Martes"){
        if(this.mostrarEspacioMartes===false){
          this.mostrarEspacioLunes=false;
          this.mostrarEspacioMartes=true;
          this.mostrarEspacioMiercoles=false;
          this.mostrarEspacioJueves=false;
          this.mostrarEspacioViernes=false;
          
        }
  }else if(dia==="Miercoles"){
        if(this.mostrarEspacioMiercoles===false){
          this.mostrarEspacioLunes=false;
          this.mostrarEspacioMartes=false;
          this.mostrarEspacioMiercoles=true;
          this.mostrarEspacioJueves=false;
          this.mostrarEspacioViernes=false;
        }
  }else if(dia==="Jueves"){
    if(this.mostrarEspacioJueves===false){
          this.mostrarEspacioJueves=true;
          this.mostrarEspacioLunes=false;
          this.mostrarEspacioMartes=false;
          this.mostrarEspacioMiercoles=false;
          this.mostrarEspacioViernes=false;
          console.log(this.mostrarEspacioJueves)
        }
  }else if(dia==="Viernes"){
        if(this.mostrarEspacioViernes===false){
          this.mostrarEspacioViernes=true;
          this.mostrarEspacioLunes=false;
          this.mostrarEspacioMartes=false;
          this.mostrarEspacioMiercoles=false;
          this.mostrarEspacioJueves=false;
          console.log(this.mostrarEspacioViernes)
        }
      }
}

            
  /* mostrar espacios de acuerdo al dia*/
  mostrarEspacioLunes:boolean = true;
  mostrarEspacioMartes:boolean = false;
  mostrarEspacioMiercoles:boolean = false;
  mostrarEspacioJueves:boolean = false;
  mostrarEspacioViernes:boolean = false;
  capacidad:number = 10;
  capacidadFull:number = 30;

  
  
  /*funcion para inicar reserva*/
  iniciarReserva(dia:string, espacio?:string){
    if (dia ==="Lunes"){
      switch(espacio){
        case "Percepción":
          this.reservado.IniciarReservaLunes1espacio  = true;
          this.reservado.finalizarReservaLunes1espacio= true;
          break;
        case "Creación":
          this.reservado.IniciarReservaLunes2espacio = true;
          this.reservado.finalizarReservaLunes2espacio = true;
          break;
        case "Conexión":
          this.reservado.IniciarReservaLunes3espacio = true;
          this.reservado.finalizarReservaLunes3espacio = true;
          break;
        case "Full":
          if(!this.reservado.reservadoLunes1espacio && !this.reservado.reservadoLunes2espacio && !this.reservado.reservadoLunes3espacio){
            this.reservado.IniciarReservaLunesFullSpace = true;
            this.reservado.finalizarReservaLunesFullSpace = true;
          }else{
            alert('Uno de los espacios esta reservado así que no se puede agendar todo el espacio')
          }
          break;    
      }
    }else if (dia ==="Martes"){
      switch(espacio){
        case "Percepción":
          this.reservado2.IniciarReservaMartes1espacio  = true;
          this.reservado2.finalizarReservaMartes1espacio= true;
          break;
        case "Creación":
          this.reservado2.IniciarReservaMartes2espacio = true;
          this.reservado2.finalizarReservaMartes2espacio = true;
          break;
        case "Conexión":
          this.reservado2.IniciarReservaMartes3espacio = true;
          this.reservado2.finalizarReservaMartes3espacio = true;
          break;  
        case "Full":
          if(!this.reservado2.reservadoMartes1espacio && !this.reservado2.reservadoMartes2espacio && !this.reservado2.reservadoMartes3espacio){
            this.reservado2.IniciarReservaMartesFullSpace = true;
            this.reservado2.finalizarReservaMartesFullSpace = true;
          }else{
            alert('Uno de los espacios esta reservado así que no se puede agendar todo el espacio')
          }
          break;   
      }
    }
  
  }
  /*Funciones para finalizar reservar el dia lunes usando el servicio de reservas*/ 
  EspacioMartes(espacio:string){
    switch(espacio){
      case "Percepción":
        if (this.capacidad >= parseInt(this.reservado2.numberParticipantsPercepcion)){
          this.reservado2.IniciarReservaMartes1espacio = false;
          this.reservado2.finalizarReservaMartes1espacio= true;
          this.reservado2.reservadoMartes1espacio= true;
          
        }else{
          alert("El numero de participantes no puede sobrepasar el maximo aforo del espacio")
        }
        break;
      case "Creación":
        if (this.capacidad >= parseInt(this.reservado2.numberParticipantsCreacion)){
          this.reservado2.IniciarReservaMartes2espacio = false;
          this.reservado2.finalizarReservaMartes2espacio = true;
          this.reservado2.reservadoMartes2espacio = true;
        }else{
          alert("El numero de participantes no puede sobrepasar el maximo aforo del espacio")
        }    
        break;
        case "Conexión":
          if (this.capacidad >= parseInt(this.reservado2.numberParticipantsConexion)){
            this.reservado2.IniciarReservaMartes3espacio = false;
            this.reservado2.finalizarReservaMartes3espacio = true;
            this.reservado2.reservadoMartes3espacio = true;
          }else{
            alert("El numero de participantes no puede sobrepasar el maximo aforo del espacio")
          }    
          break; 
        
        case "Full":
          if (this.capacidadFull >= parseInt(this.reservado2.numberParticipantsFull)){
            this.reservado2.IniciarReservaMartesFullSpace= false;
            this.reservado2.finalizarReservaMartesFullSpace = true;
            this.reservado2.reservadoMartesFullSpace= true;
  
            
  
            this.reservado2.nameUnderSpacePercepcion = this.reservado.nameUnderSpaceFull;
            this.reservado2.nameUnderSpaceCreacion = this.reservado.nameUnderSpaceFull;
            this.reservado2.nameUnderSpaceConexion = this.reservado.nameUnderSpaceFull;
            this.reservado2.descriptionUnderSpacePercepcion = this.reservado.descriptionUnderSpaceFull;
            this.reservado2.descriptionUnderSpaceCreacion = this.reservado.descriptionUnderSpaceFull;
            this.reservado2.descriptionUnderSpaceConexion = this.reservado.descriptionUnderSpaceFull;
            this.reservado2.numberParticipantsPercepcion = '10';
            this.reservado2.numberParticipantsCreacion = '10';
            this.reservado2.numberParticipantsConexion = '10';
  
            this.reservado2.IniciarReservaMartes1espacio = false;
            this.reservado2.finalizarReservaMartes1espacio = true;
            this.reservado2.reservadoMartes1espacio= true;
  
            this.reservado2.IniciarReservaMartes2espacio = false;
            this.reservado2.finalizarReservaMartes2espacio = true;
            this.reservado2.reservadoMartes2espacio = true;
  
            this.reservado2.IniciarReservaMartes3espacio = false;
            this.reservado2.finalizarReservaMartes3espacio = true;
            this.reservado2.reservadoMartes3espacio = true;
  
          }else{
            alert("El numero de participantes no puede sobrepasar el maximo aforo del espacio")
          }    
          break;   
    
    }
  }
  
  EspacioLunes(espacio:string){
    switch(espacio){
      case "Percepción":
        if (this.capacidad >= parseInt(this.reservado.numberParticipantsPercepcion)){
          this.reservado.IniciarReservaLunes1espacio = false;
          this.reservado.finalizarReservaLunes1espacio = true;
          this.reservado.reservadoLunes1espacio= true;
          
        }else{
          alert("El numero de participantes no puede sobrepasar el maximo aforo del espacio")
        }
        break;
    case "Creación":
      if (this.capacidad >= parseInt(this.reservado.numberParticipantsCreacion)){
        this.reservado.IniciarReservaLunes2espacio = false;
        this.reservado.finalizarReservaLunes2espacio = true;
        this.reservado.reservadoLunes2espacio = true;
      }else{
        alert("El numero de participantes no puede sobrepasar el maximo aforo del espacio")
      }    
      break;
      case "Conexión":
        if (this.capacidad >= parseInt(this.reservado.numberParticipantsConexion)){
          this.reservado.IniciarReservaLunes3espacio = false;
          this.reservado.finalizarReservaLunes3espacio = true;
          this.reservado.reservadoLunes3espacio = true;
        }else{
          alert("El numero de participantes no puede sobrepasar el maximo aforo del espacio")
        }    
        break;  
      case "Full":
        
        if (this.capacidadFull >= parseInt(this.reservado.numberParticipantsFull)){
          this.reservado.IniciarReservaLunesFullSpace= false;
          this.reservado.finalizarReservaLunesFullSpace = true;
          this.reservado.reservadoLunesFullSpace= true;

          

          this.reservado.nameUnderSpacePercepcion = this.reservado.nameUnderSpaceFull;
          this.reservado.nameUnderSpaceCreacion = this.reservado.nameUnderSpaceFull;
          this.reservado.nameUnderSpaceConexion = this.reservado.nameUnderSpaceFull;
          this.reservado.descriptionUnderSpacePercepcion = this.reservado.descriptionUnderSpaceFull;
          this.reservado.descriptionUnderSpaceCreacion = this.reservado.descriptionUnderSpaceFull;
          this.reservado.descriptionUnderSpaceConexion = this.reservado.descriptionUnderSpaceFull;
          this.reservado.numberParticipantsPercepcion = '10';
          this.reservado.numberParticipantsCreacion = '10';
          this.reservado.numberParticipantsConexion = '10';

          this.reservado.IniciarReservaLunes1espacio = false;
          this.reservado.finalizarReservaLunes1espacio = true;
          this.reservado.reservadoLunes1espacio= true;

          this.reservado.IniciarReservaLunes2espacio = false;
          this.reservado.finalizarReservaLunes2espacio = true;
          this.reservado.reservadoLunes2espacio = true;

          this.reservado.IniciarReservaLunes3espacio = false;
          this.reservado.finalizarReservaLunes3espacio = true;
          this.reservado.reservadoLunes3espacio = true;

        }else{
          alert("El numero de participantes no puede sobrepasar el maximo aforo del espacio")
        }    
        break;   

    }
  }


  // funcion para almacenar un espacio promocionado
 
  promocionar(espacio:string, dia:string){
    if(dia === 'Lunes'){
      switch(espacio){
        case "Percepción":
          this.usuariosservice.usuario.forEach(elemento =>{
            if(this.usuariosservice.nameOnScreen===elemento.name){
              this.PromocionarEspacio.reservado.push( new espacioPromocionado(elemento.name, elemento.email, elemento.password, dia, espacio, this.reservado.nameUnderSpacePercepcion, this.reservado.numberParticipantsPercepcion, this.reservado.descriptionUnderSpacePercepcion))
              
              this.mensajeAMostrar= `El espacio ${espacio} reservado el dia ${dia} para el evento de ${this.reservado.descriptionUnderSpacePercepcion} a nombre de ${this.reservado.nameUnderSpacePercepcion} ha sido promocionado con exito`
              this.alert.alertOn = true;
            }
          })
          break;
        case "Creación":
          this.usuariosservice.usuario.forEach(elemento =>{
            if(this.usuariosservice.nameOnScreen===elemento.name){
              this.PromocionarEspacio.reservado.push( new espacioPromocionado(elemento.name, elemento.email, elemento.password, dia, espacio, this.reservado.nameUnderSpaceCreacion, this.reservado.numberParticipantsCreacion, this.reservado.descriptionUnderSpaceCreacion))
              
              this.mensajeAMostrar= `El espacio ${espacio} reservado el dia ${dia} para el evento de ${this.reservado.descriptionUnderSpacePercepcion} a nombre de ${this.reservado.nameUnderSpacePercepcion} ha sido promocionado con exito`
              this.alert.alertOn = true;
            }
          })
          break;
          case "Conexión":
            this.usuariosservice.usuario.forEach(elemento =>{
              if(this.usuariosservice.nameOnScreen===elemento.name){
                this.PromocionarEspacio.reservado.push( new espacioPromocionado(elemento.name, elemento.email, elemento.password, dia, espacio, this.reservado.nameUnderSpaceConexion, this.reservado.numberParticipantsConexion, this.reservado.descriptionUnderSpaceConexion))
                
                this.mensajeAMostrar= `El espacio ${espacio} reservado el dia ${dia} para el evento de ${this.reservado.descriptionUnderSpacePercepcion} a nombre de ${this.reservado.nameUnderSpacePercepcion} ha sido promocionado con exito`
                this.alert.alertOn = true;
              }
            })
            break;
          case "Lab-Futuros":
            this.usuariosservice.usuario.forEach(elemento =>{
              if(this.usuariosservice.nameOnScreen===elemento.name){
                this.PromocionarEspacio.reservado.push( new espacioPromocionado(elemento.name, elemento.email, elemento.password, dia, espacio, this.reservado.nameUnderSpaceFull, this.reservado.numberParticipantsFull, this.reservado.descriptionUnderSpaceFull))
                  
                this.mensajeAMostrar= `El espacio ${espacio} reservado el dia ${dia} para el evento de ${this.reservado.descriptionUnderSpacePercepcion} a nombre de ${this.reservado.nameUnderSpacePercepcion} ha sido promocionado con exito`
                this.alert.alertOn = true;
              }
            })
            break;  
      }
    }else if(dia==='Martes'){
      switch(espacio){
        case "Percepción":
          this.usuariosservice.usuario.forEach(elemento =>{
            if(this.usuariosservice.nameOnScreen===elemento.name){
              this.PromocionarEspacio.reservado.push( new espacioPromocionado(elemento.name, elemento.email, elemento.password, dia, espacio, this.reservado2.nameUnderSpacePercepcion, this.reservado2.numberParticipantsPercepcion, this.reservado2.descriptionUnderSpacePercepcion))
              
              this.mensajeAMostrar= `El espacio ${espacio} reservado el dia ${dia} para el evento de ${this.reservado.descriptionUnderSpacePercepcion} a nombre de ${this.reservado.nameUnderSpacePercepcion} ha sido promocionado con exito`
              this.alert.alertOn = true;
            }
          })
          break;
        case "Creación":
          this.usuariosservice.usuario.forEach(elemento =>{
            if(this.usuariosservice.nameOnScreen===elemento.name){
              this.PromocionarEspacio.reservado.push( new espacioPromocionado(elemento.name, elemento.email, elemento.password, dia, espacio, this.reservado2.nameUnderSpaceCreacion, this.reservado2.numberParticipantsCreacion, this.reservado2.descriptionUnderSpaceCreacion))
              this.mensajeAMostrar= `El espacio ${espacio} reservado el dia ${dia} para el evento de ${this.reservado.descriptionUnderSpacePercepcion} a nombre de ${this.reservado.nameUnderSpacePercepcion} ha sido promocionado con exito`
              this.alert.alertOn = true;
            }
          })
          break;
          case "Conexión":
            this.usuariosservice.usuario.forEach(elemento =>{
              if(this.usuariosservice.nameOnScreen===elemento.name){
                this.PromocionarEspacio.reservado.push( new espacioPromocionado(elemento.name, elemento.email, elemento.password, dia, espacio, this.reservado2.nameUnderSpaceConexion, this.reservado2.numberParticipantsConexion, this.reservado2.descriptionUnderSpaceConexion))
                this.mensajeAMostrar= `El espacio ${espacio} reservado el dia ${dia} para el evento de ${this.reservado.descriptionUnderSpacePercepcion} a nombre de ${this.reservado.nameUnderSpacePercepcion} ha sido promocionado con exito`
                this.alert.alertOn = true;
              }
            })
            break;

          case "Lab-Futuros":
            this.usuariosservice.usuario.forEach(elemento =>{
              if(this.usuariosservice.nameOnScreen===elemento.name){
                this.PromocionarEspacio.reservado.push( new espacioPromocionado(elemento.name, elemento.email, elemento.password, dia, espacio, this.reservado2.nameUnderSpaceFull, this.reservado2.numberParticipantsFull, this.reservado2.descriptionUnderSpaceFull))
                    
                this.mensajeAMostrar= `El espacio ${espacio} reservado el dia ${dia} para el evento de ${this.reservado.descriptionUnderSpacePercepcion} a nombre de ${this.reservado.nameUnderSpacePercepcion} ha sido promocionado con exito`
                this.alert.alertOn = true;
              }
            })
            break; 
      }

    }

    
    
    console.log("Promocionado")
  }
  


}
