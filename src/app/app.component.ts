import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showhome:Boolean = false;
  constructor(public loginservice: LoginService,
              public usuarioservice:UsuariosService){
    this.showhome= loginservice.procesador
  }
  
  title = 'Lab Futuros';
  activar_boton: boolean = false;
  tooltip_variable: string= "";
  
  desactivar(){
    if(this.activar_boton){
      this.activar_boton= false;

    }else{
      this.activar_boton = true;

    }
    console.log(this.activar_boton);


  }
  tooltip_name(variable: string){
    if(this.activar_boton===false){
      this.tooltip_variable = variable;
    }else{
      this.tooltip_variable = "";
    }
  }
}
