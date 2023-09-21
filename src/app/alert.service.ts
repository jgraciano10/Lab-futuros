import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alertOn:boolean=false;
  constructor() { }
}
