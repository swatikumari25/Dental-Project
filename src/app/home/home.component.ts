import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subject;
  email;
  name;
  mobNumber;
  cardDetails = [{
    img:'../assets/101991_SamadnyaSunilJawalekar_24b27d28-7ddc-4147-8113-752446b4d888.png',
    specialization:'Workers'
  },
  {
    img:'../assets/101991_SamadnyaSunilJawalekar_24b27d28-7ddc-4147-8113-752446b4d888.png',
    specialization:'Happy Clients'
  },
  {
    img:'../assets/101991_SamadnyaSunilJawalekar_24b27d28-7ddc-4147-8113-752446b4d888.png',
    specialization:'Ready'
  }]
  
  imgDetails = [{
    image:'../assets/101175_SugandhMittal_e8e24618-ac2c-4c5f-b119-de8d8ca5c5d7.png',
    name:'MARTIN GRAY',
    specialization:'Dental Hygenist',
  },
  {
    image:'../assets/101175_SugandhMittal_e8e24618-ac2c-4c5f-b119-de8d8ca5c5d7.png',
    name:'LESLIE GROSS',
    specialization:'Dentist'
  },
  {
    image:'../assets/101175_SugandhMittal_e8e24618-ac2c-4c5f-b119-de8d8ca5c5d7.png',
    name:'DANA SIMS',
    specialization:'Dentist'
  },
  {
    image:'../assets/101175_SugandhMittal_e8e24618-ac2c-4c5f-b119-de8d8ca5c5d7.png',
    name:'GARRY GROWLES',
    specialization:'Dentist'
  },
  ]
  
  serviceDetails = [{
    image:'../assets/DentalCare_Hero.jpg',
    name:'PREVANTIVE CARE',
    specialization:'Sabka Dentist is one of the leading clinics in Bangalore which has been established in the year 2010 and now it has the best dentists in Bangalore.'
  },
  {
    image:'../assets/DentalCare_Hero.jpg',
    name:'RESTORATIVE SOLUTIONS',
    specialization:'Sabka Dentist is one of the leading clinics in Bangalore which has been established in the year 2010 and now it has the best dentists in Bangalore.'
  },
  {
    image:'../assets/DentalCare_Hero.jpg',
    name:'COSMETIC SOLUTIONS',
    specialization:'Sabka Dentist is one of the leading clinics in Bangalore which has been established in the year 2010 and now it has the best dentists in Bangalore.'
  },
  {
    image:'../assets/DentalCare_Hero.jpg',
    name:'ORTHODONTICS',
    specialization:'Sabka Dentist is one of the leading clinics in Bangalore which has been established in the year 2010 and now it has the best dentists in Bangalore.'
  },
  {
    image:'../assets/DentalCare_Hero.jpg',
    name:'PEDIATRIC',
    specialization:'Sabka Dentist is one of the leading clinics in Bangalore which has been established in the year 2010 and now it has the best dentists in Bangalore.'
  },
  {
    image:'../assets/DentalCare_Hero.jpg',
    name:'ADDITIONAL TREATMENTS',
    specialization:'Sabka Dentist is one of the leading clinics in Bangalore which has been established in the year 2010 and now it has the best dentists in Bangalore.'
  },
  {
    image:'../assets/DentalCare_Hero.jpg',
    name:'DIAGONSTIC&PREVENTIVE',
    specialization:'Sabka Dentist is one of the leading clinics in Bangalore which has been established in the year 2010 and now it has the best dentists in Bangalore.'
  },
  {
    image:'../assets/DentalCare_Hero.jpg',
    name:'DENTURE REPAIR',
    specialization:'Sabka Dentist is one of the leading clinics in Bangalore which has been established in the year 2010 and now it has the best dentists in Bangalore.'
  },
  ]

  constructor(public router:Router) { }

  ngOnInit(): void {
  }


contactUs() {
  this.router.navigate(['/Contactus']);
}
bookAppointment() {
  this.router.navigate(['/Appointment']);
}
completeLogin(login :NgForm){ 
  if((this.subject && this.subject.length > 0) && (this.email && this.email.length > 0) &&
  (this.name && this.name.length > 0) && (this.mobNumber && this.mobNumber.length > 0)) {
 alert("Your Form has Submitted");
 console.log("Subject",this.subject, "Email",this.email, "Name",this.name, "Mobile",this.mobNumber);
 }
 else {
   alert("Please Fill the form");
 }  
 login.reset()    
 } 
}
