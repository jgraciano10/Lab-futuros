import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  imagenURL: SafeResourceUrl;
  imagenSuperiorDerecha:SafeResourceUrl;
  imagenSuperiorIzquierda:SafeResourceUrl;
  imagenInferiorIzquierda:SafeResourceUrl;
  imagenCentral:SafeResourceUrl;
  imagenInferiorDerecha:SafeResourceUrl;
  zoomImageP:boolean=false;
  zoomImageCR:boolean=false;
  zoomImageCO:boolean=false;



  constructor(private sanitizer: DomSanitizer){
    this.imagenURL = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/espacio1.png');
    this.imagenSuperiorDerecha = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/imagenSuperiorDerecha.png');
    this.imagenSuperiorIzquierda = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/ImagenSuperiorIzquierda.png');
    this.imagenInferiorIzquierda = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/ImagenInferiorIzquierda.png');
    this.imagenCentral = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/ImagenCentral.png');
    this.imagenInferiorDerecha = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/ImagenInferiorDerecha.png');
  }
  
  zoom(inicial:string){
    switch(inicial){
      case 'p':
        if(this.zoomImageP){
          this.zoomImageP=false;
        }else{
          this.zoomImageP=true;
        }
        break;
      case 'cr':
        if(this.zoomImageCR){
          this.zoomImageCR=false;
        }else{
          this.zoomImageCR=true;
        }
        break;
      case 'co':
        if(this.zoomImageCO){
          this.zoomImageCO=false;
        }else{
          this.zoomImageCO=true;
        }
        break;
    }
    
  }

}
