import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PromocionarService } from '../promocionar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  imagenURL: SafeResourceUrl;
  constructor( public usuarioservice:UsuariosService,
               public promocionar:PromocionarService,
               private sanitizer: DomSanitizer){
                this.imagenURL = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/nodoLogo2.png');
               }

  showEspaciosP(){
    if(this.promocionar.showPromocionado){
      this.promocionar.showPromocionado=false;
    }else{
      this.promocionar.showPromocionado=true;
    }
  }    
  tooltip_variable:string=""
  tooltip_name(variable: string){
    this.tooltip_variable=variable;
  }         
}
