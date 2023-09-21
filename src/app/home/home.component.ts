import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PromocionarService } from '../promocionar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imagenURL: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer,
             public promocionar: PromocionarService ) {
    this.imagenURL = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/lab.png');
  }
}
