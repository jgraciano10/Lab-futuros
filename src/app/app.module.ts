import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReservasComponent } from './reservas/reservas.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeeedbackComponent } from './feeedback/feeedback.component';
import { EventosComponent } from './eventos/eventos.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
 
  {
    path:"login",
    component: LoginComponent
  },{
    path:"home",
   component: HomeComponent
  },
  {
    path:"",
    redirectTo:"/home",
    pathMatch: "full"
  },
  {
    path:"reservas",
    component: ReservasComponent
  },
  {
    path:"eventos",
    component: EventosComponent
  },
  {
    path:"about-us",
    component: AboutUsComponent
  },
  {
    path:"feedback",
    component:FeeedbackComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReservasComponent,
    AboutUsComponent,
    FeeedbackComponent,
    EventosComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
