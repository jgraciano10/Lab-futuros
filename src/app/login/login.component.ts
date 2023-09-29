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
  
  observacion:string="Para saber acerca de nuestra politica de tratamiento de datos haga click en "
  email: string="";
  password: string="";
  usuarios:persona[] =[];
  numero:number=0;
  showLogin:boolean=false;

  constructor(public loginservice: LoginService,
              public usuarioservice:UsuariosService){
                this.usuarios = usuarioservice.usuario;
              }

  /*Funcion para mirar si el usuario existe y al mismo tiempo acceder en caso de que exista*/     
  changepage(event: Event){
    event.preventDefault();
    console.log(this.usuarios)
    console.log(this.email)
    console.log(this.password)
  
    this.usuarios.forEach(element => {
      if(element.email===this.email&&element.password===this.password){
        this.loginservice.proceed();
        this.usuarioservice.nameOnScreen = element.name;
        console.log(this.usuarioservice.nameOnScreen)
      }else{
        this.observacion="Email o contraseña incorrecta, si no has creado un usuario por favor crea uno, recuerde que si no llena uno de los campos el sistema lo toma como que el dato es incorrecto"
      }
          
      
    });
    
    
  }

  //Function para desplegar o ocultar el login
  showHideLogin(){
    if(this.showLogin){
      this.showLogin=false;
    }else{
      this.showLogin=true;
    }
  }
  
  

  /* funcion para acceder a la creacion del usuario*/
  createnewuser:boolean= false;
  Newname:string =""
  Newemail:string = ""
  Newpassword:string = ""
  createnew(){
    this.createnewuser= true;

  }

  cancelarAddNew(){
    this.createnewuser= false;
  }
  addnewuser(){
    if(this.Newname!=="" &&this.Newemail!==""){
      if(this.Newpassword!=="" ){
        this.usuarios.push(new persona(this.Newname, this.Newemail,this.Newpassword))
        this.createnewuser = false;
      }

    }
  }
  
}
