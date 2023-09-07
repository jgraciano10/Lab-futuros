import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  IniciarReservaLunes1espacio:boolean=false;
  reservadoLunes1espacio:boolean=false;
  reservadoLunes2espacio:boolean=false;
  reservadoLunes3espacio:boolean=false;

  
  constructor() { }
}
