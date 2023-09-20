import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  imagenURL: SafeResourceUrl;
  constructor( public usuarioservice:UsuariosService,
               private sanitizer: DomSanitizer){
                this.imagenURL = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/nodoLogo2.png');
               }
}
