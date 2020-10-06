import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrer',
  templateUrl: './carrer.component.html',
  styleUrls: ['./carrer.component.css']
})
export class CarrerComponent implements OnInit {
  cardDetails = [{
    img:'../assets/101991_SamadnyaSunilJawalekar_24b27d28-7ddc-4147-8113-752446b4d888.png',
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
