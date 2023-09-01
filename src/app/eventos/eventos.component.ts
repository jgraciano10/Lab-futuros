import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { PromocionarService } from '../promocionar.service';
import { espacioPromocionado } from '../espacioPromocionado.model';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  constructor(public usuario:UsuariosService,
              public promocionar: PromocionarService){
                
              }
}
