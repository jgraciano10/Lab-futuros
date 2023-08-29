import { Injectable } from '@angular/core';
import { persona } from './persona.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  nameOnScreen:string="";
  usuario: persona[] = [
    new persona("Juan", "juan@email.com", "hola1234"),
    new persona("Laura", "laura@email.com", "hola5678")
  ];
  constructor() { }
}
