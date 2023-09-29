import { Injectable } from '@angular/core';
import { persona } from './persona.model';
import { espacioPromocionado } from './espacioPromocionado.model';

@Injectable({
  providedIn: 'root'
})
export class PromocionarService {
  // Lunes
  showPromocionado: boolean = false;
  promocionadoPercepcionL:boolean=false;
  promocionadoCreacionL:boolean=false;
  promocionadoConexionL:boolean=false;
  promocionadoFullSpace:boolean=false;

  //Martes
  promocionadoPercepcionM:boolean=false;
  promocionadoCreacionM:boolean=false;
  promocionadoConexionM:boolean=false;
  promocionadoFullSpaceM:boolean=false;
  reservado:espacioPromocionado[] = []
}
