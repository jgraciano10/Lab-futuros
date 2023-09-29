import { Component } from '@angular/core';
import { MiReservaService } from '../mi-reserva.service';
import { ShowReservadoService } from '../show-reservado.service';
import { month } from '../meses.model';


@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.component.html',
  styleUrls: ['./mis-reservas.component.css']
})
export class MisReservasComponent {

  constructor(public misReservas: MiReservaService,
              public showReservado: ShowReservadoService){

  }
  showElement:boolean=false;
  elementosReservado:month[]= []
  espacioReservado: string="No tiene ningun espacio reservado para este dia";
  mostrarEspacios:boolean=false;
  currentDate:Date=new Date();
  numberMonth:number=this.currentDate.getMonth();
  arrayMonth: string[]=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  currentMonth:string= this.arrayMonth[this.numberMonth];
  firstMonthDay:number= (new Date(2023, (this.numberMonth), 1)).getDay();
  lastMonthDay:number=(new Date(2023, (this.numberMonth+1), 0)).getDay();
  numberOfDays:number= (new Date(2023, (this.numberMonth+1), 0 )).getDate();
  days:number[]=[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  tieneUnElemento: boolean[]=[]
  rellenarEmpty:number[]=[1, 2, 3, 4];
  rellenarEmptyFinal:number[]=[1]
  rellenarfinal( ){
    this.rellenarEmptyFinal=[]
    this.lastMonthDay=(new Date(2023, (this.numberMonth+1), 0)).getDay();
    if(this.lastMonthDay!==0){
      for(let i =this.lastMonthDay; i<7; i++){
        this.rellenarEmptyFinal.push(i)
      }
    }
    
  }
  rellenar(){
    this.rellenarEmpty=[]
    for(let i =1; i<this.firstMonthDay; i++){
      this.rellenarEmpty.push(i)
    }
  }
  fullFillDays(mes:string){
    this.elementosReservado = []
    this.days=[]
    this.tieneUnElemento=[false, false]
    for(let i=2; i<=this.numberOfDays;i++){
      this.days.push(i);
      this.misReservas.almacenamiento.forEach(element => {
    
        if(element.dia==i&&element.mes==this.arrayMonth.indexOf(mes)){
          this.tieneUnElemento.push(true)
          this.elementosReservado.push(element)
          
        }else{
          this.tieneUnElemento.push(false)
         
        }
            
      })
      
    }
    this.rellenar()
    this.rellenarfinal( )
  }

  mostrar(mes:string, dia:number){
    this.mostrarEspacios=true;
    console.log(this.tieneUnElemento)
    this.showReservado.showReservado = [];
    console.log(mes)
    console.log(dia)
    this.misReservas.almacenamiento.forEach(element => {
      console.log(element.dia)
      console.log(element.mes)

      if(element.dia==dia&&element.mes==this.arrayMonth.indexOf(mes)){
        this.showReservado.showReservado.push(element)
        this.espacioReservado=`Para el dia ${dia} del mes de ${mes} tienes una reserva en el espacio de ${element.espacio}`
      }else{
        this.espacioReservado='No tiene ningun espacio reservado para este dia'
      }
          
    })
  }
  selectMonth(value:string){
    switch ( value){
      case '+':
        if(this.numberMonth<11){
          this.numberMonth++;
          this.currentMonth= this.arrayMonth[this.numberMonth];
          this.numberOfDays= (new Date(2023, (this.numberMonth+1), 0 )).getDate();
          this.firstMonthDay= (new Date(2023, (this.numberMonth), 1 )).getDay();
          if(this.firstMonthDay===0){
            this.firstMonthDay=7;
          }
          this.fullFillDays(this.currentMonth);
          

        }else{
          this.numberMonth =0;
          this.currentMonth= this.arrayMonth[this.numberMonth];
          this.numberOfDays= (new Date(2023, (this.numberMonth+1), 0 )).getDate();
          this.firstMonthDay= (new Date(2023, (this.numberMonth), 1 )).getDay();
          if(this.firstMonthDay===0){
            this.firstMonthDay=7;
          }
          this.fullFillDays(this.currentMonth);
        }
        break;
      case '-':
        if(this.numberMonth>0){
          this.numberMonth--;
          this.currentMonth= this.arrayMonth[this.numberMonth];
          this.numberOfDays= (new Date(2023, (this.numberMonth+1), 0 )).getDate();
          this.firstMonthDay= (new Date(2023, (this.numberMonth), 1 )).getDay();
          if(this.firstMonthDay===0){
            this.firstMonthDay=7;
          }
          this.fullFillDays(this.currentMonth);
        }else{
          this.numberMonth =11;
          this.currentMonth= this.arrayMonth[this.numberMonth];
          this.numberOfDays= (new Date(2023, (this.numberMonth+1), 0 )).getDate();
          this.firstMonthDay= (new Date(2023, (this.numberMonth), 1 )).getDay();
          if(this.firstMonthDay===0){
            this.firstMonthDay=7;
          }
          this.fullFillDays(this.currentMonth);
        }
        break;

      
    }
  }

  showIfthere(mes:string, dia:number){
    

  }
  
}
