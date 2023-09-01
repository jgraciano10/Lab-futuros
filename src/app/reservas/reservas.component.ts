import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { ReservasService } from '../reservas.service';
import { espacioPromocionado } from '../espacioPromocionado.model';
import { PromocionarService } from '../promocionar.service';
import { LoginService } from '../login.service';
import { persona } from '../persona.model';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent {
  constructor(public usuariosservice: UsuariosService,
              public reservado:ReservasService,
              public PromocionarEspacio: PromocionarService,
              public login: LoginService){
              
             }
  /*Funciones para reservar el dia luens*/ 
  primerEspacioLunes(){
    this.reservado.reservadoLunes1espacio = true

  }

  // funcion para almacenar un espacio promicionado
 
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
