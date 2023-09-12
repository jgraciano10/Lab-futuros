import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservasMartesService {
  IniciarReservaMartes1espacio:boolean=false;
  finalizarReservaMartes1espacio:boolean=false;
  
  IniciarReservaMartes2espacio:boolean=false;
  finalizarReservaMartes2espacio:boolean=false;

  IniciarReservaMartes3espacio:boolean=false;
  finalizarReservaMartes3espacio:boolean=false;

  IniciarReservaMartesFullSpace:boolean=false;
  finalizarReservaMartesFullSpace:boolean=false;

  nameUnderSpacePercepcion:string="";
  descriptionUnderSpacePercepcion:string="";
  numberParticipantsPercepcion:string="";

  nameUnderSpaceCreacion:string="";
  descriptionUnderSpaceCreacion:string="";
  numberParticipantsCreacion:string="";

  nameUnderSpaceConexion:string="";
  descriptionUnderSpaceConexion:string="";
  numberParticipantsConexion:string="";

  nameUnderSpaceFull:string="";
  descriptionUnderSpaceFull:string="";
  numberParticipantsFull:string="";

  reservadoMartes1espacio:boolean=false;
  reservadoMartes2espacio:boolean=false;
  reservadoMartes3espacio:boolean=false;
  reservadoMartesFullSpace:boolean=false;


  
  constructor() { }
}
