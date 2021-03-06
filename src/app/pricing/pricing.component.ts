import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  cardDetails = [{
    img:'../assets/101991_SamadnyaSunilJawalekar_24b27d28-7ddc-4147-8113-752446b4d888.png',
    specialization:'Sabka Dentist treasures the best dental care in bangalore who encourages people in embracing better oral health that can make them feel.',
    button:'Make An Appointment',
    cardheader:'Preventive Care'
  },
  {
    img:'../assets/101991_SamadnyaSunilJawalekar_24b27d28-7ddc-4147-8113-752446b4d888.png',
    specialization:'Sabka Dentist treasures the best dental care in bangalore who encourages people in embracing better oral health that can make them feel.',
    button:'Make An Appointment',
    cardheader:'Cosmetic Solutions'
  },
  {
    img:'../assets/101991_SamadnyaSunilJawalekar_24b27d28-7ddc-4147-8113-752446b4d888.png',
    specialization:'Sabka Dentist treasures the best dental care in bangalore who encourages people in embracing better oral health that can make them feel.',
    button:'Make An Appointment',
    cardheader:'Restorative Solutions'
  }]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  bookAppointment() {
    this.router.navigate(['/Appointment']);
  }
}
