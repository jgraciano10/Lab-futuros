import { Injectable } from '@angular/core';
import { persona } from './persona.model';
import { espacioPromocionado } from './espacioPromocionado.model';

@Injectable({
  providedIn: 'root'
})
export class PromocionarService {
  showPromocionado: boolean = false;
  reservado:espacioPromocionado[] = []
}
