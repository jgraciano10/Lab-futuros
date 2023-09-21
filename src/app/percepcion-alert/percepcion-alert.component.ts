import { Component, Input } from '@angular/core';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-percepcion-alert',
  templateUrl: './percepcion-alert.component.html',
  styleUrls: ['./percepcion-alert.component.css']
})
export class PercepcionAlertComponent {
  @Input() message:string ='';
  constructor(private alert:AlertService){

  }

  closeAlert(){
    this.alert.alertOn = false;
  }

}
