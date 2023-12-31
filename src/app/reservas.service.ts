import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  IniciarReservaLunes1espacio:boolean=false;
  finalizarReservaLunes1espacio:boolean=false;
  
  IniciarReservaLunes2espacio:boolean=false;
  finalizarReservaLunes2espacio:boolean=false;

  IniciarReservaLunes3espacio:boolean=false;
  finalizarReservaLunes3espacio:boolean=false;

  IniciarReservaLunesFullSpace:boolean=false;
  finalizarReservaLunesFullSpace:boolean=false;

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

  reservadoLunes1espacio:boolean=false;
  reservadoLunes2espacio:boolean=false;
  reservadoLunes3espacio:boolean=false;
  reservadoLunesFullSpace:boolean=false;

  
  constructor() { }
}
