import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent {
  constructor(public usuariosservice: UsuariosService){}
  /*Funciones para reservar el dia luens*/ 
  reservadoLunes1espacio:boolean=false;
  reservadoLunes2espacio:boolean=false;
  reservadoLunes3espacio:boolean=false;

  primerEspacioLunes(){
    this.reservadoLunes1espacio = true;

  }

  


}
