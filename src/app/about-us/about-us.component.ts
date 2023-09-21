import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  imagenURL: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer){
    this.imagenURL = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/espacioMuestra.png');
  }
  

}
