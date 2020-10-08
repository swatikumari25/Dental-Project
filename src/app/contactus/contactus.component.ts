import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  profileForm: FormGroup; 
  isSubmitted: boolean = false; 
  constructor(private formBuilder: FormBuilder) { 
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
    address: new FormControl('',Validators.required),
      date: new FormControl('',Validators.required),
      time: new FormControl('',Validators.required),
      comment: new FormControl(''),
  });
}

  ngOnInit(): void {
  }

  onSubmit() {
    this.isSubmitted = true;  
    if(this.profileForm.valid){        
      console.log("User Registration Form Submit", this.profileForm.value); 
      // this.profileForm.reset();  
    }
  }
}
