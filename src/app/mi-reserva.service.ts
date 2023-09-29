import { Injectable } from '@angular/core';
import { month } from './meses.model';

@Injectable({
  providedIn: 'root'
})
export class MiReservaService {
  almacenamiento:month[]= [ ];
  constructor() { }
}
