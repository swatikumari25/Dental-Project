import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

    profileForm: FormGroup; 
    isSubmitted: boolean = false; 
    constructor(private formBuilder: FormBuilder,public router:Router) { 
      this.profileForm = this.formBuilder.group({
        name:new FormControl('',Validators.required),
        number: new FormControl('', [  
        Validators.required,    
        Validators.maxLength(10),  
        Validators.pattern('^[0-9]*$')]),  
        email: new FormControl('', [  
        Validators.required,  
        Validators.minLength(5),  
        Validators.maxLength(80),  
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")  
      ]),
      subject: new FormControl('',Validators.required),
        message: new FormControl(''),
    });
  }


  ngOnInit(): void {
  }


contactUs() {
  this.router.navigate(['/Contactus']);
}
bookAppointment() {
  this.router.navigate(['/Appointment']);
}
onSubmit() {
  this.isSubmitted = true;  
  if(this.profileForm.valid){        
    console.log("User Registration Form Submit", this.profileForm.value); 
    // this.profileForm.reset();  
  }
}
}
