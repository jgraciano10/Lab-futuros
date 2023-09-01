import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { ReservasService } from '../reservas.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent {
  constructor(public usuariosservice: UsuariosService,
             public reservado:ReservasService){
              
             }
  /*Funciones para reservar el dia luens*/ 
  primerEspacioLunes(){
    this.reservado.reservadoLunes1espacio = true

  }
  

  


}
