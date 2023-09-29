import { Injectable } from '@angular/core';
import { month } from './meses.model';

@Injectable({
  providedIn: 'root'
})
export class ShowReservadoService {
  showReservado:month[]= [ ];
  constructor() { }
}
