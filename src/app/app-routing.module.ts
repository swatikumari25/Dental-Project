import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent} from './client/client.component';
import { CarrerComponent} from './carrer/carrer.component';
import {PricingComponent} from './pricing/pricing.component';
import {ContactusComponent} from './contactus/contactus.component';
import {HomeComponent} from './home/home.component';
import {AppointmentComponent} from './appointment/appointment.component';
const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  {path:'Client', component:ClientComponent},
  {path:'Carrer', component:CarrerComponent},
  {path:'Pricing', component:PricingComponent},
  {path:'Contactus', component:ContactusComponent},
  {path:'Home', component:HomeComponent},
  {path:'Appointment', component:AppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[ClientComponent,CarrerComponent,PricingComponent,ContactusComponent,HomeComponent,AppointmentComponent]
