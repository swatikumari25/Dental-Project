import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  profileForm = new FormGroup({
    name:new FormControl('',Validators.required),
    number: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    date: new FormControl('',Validators.required),
    time: new FormControl('',Validators.required),
    
  });
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log("Your Name is",this.profileForm.get('name').value);
    alert("Your Form has Submitted");
    this.profileForm.reset();  
      }

}
