import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { UsuariosService } from '../usuarios.service';
import { persona } from '../persona.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  
  observacion:string="Nunca compartiremos su correo electrónico con nadie más."
  email: string="";
  password: string="";
  usuarios:persona[] =[];
  numero:number=0;
  constructor(public loginservice: LoginService,
              public usuarioservice:UsuariosService){}

  /*Funcion para mirar si el usuario existe y al mismo tiempo acceder en caso de que exista*/     
  changepage(event: Event){
    event.preventDefault();
    
    console.log(this.email)
    console.log(this.password)
    console.log(this.usuarioservice.usuario)
    this.usuarioservice.usuario.forEach(element => {
      if(element.email===this.email&&element.password===this.password){
        this.loginservice.proceed();
        this.usuarioservice.nameOnScreen = element.name;
        console.log(this.usuarioservice.nameOnScreen)
      }else{
        this.observacion="Email o contraseña incorrecta, si no has creado un usuario por favor crea uno, recuerde que si no llena uno de los campos el sistema lo toma como que el dato es incorrecto"
      }
          
      
    });
    
    
  }

  /* funcion para acceder a la creacion del usuario*/
  notcreatenewuser:boolean= true;
  Newname:string =""
  Newemail:string = ""
  Newpassword:string = ""
  createnew(){
    this.notcreatenewuser= false;

  }
  addnewuser(){
    if(this.Newname!=="" &&this.Newemail!==""){
      if(this.Newpassword!=="" ){
        this.usuarioservice.usuario.push(new persona(this.Newname, this.Newemail,this.Newpassword))
        this.notcreatenewuser = true;
      }

    }
  }
  
}
