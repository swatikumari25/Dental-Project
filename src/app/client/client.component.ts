import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  cardText= [{
    headertext:'ARTICON',
    text:'Some quick example text to build on the card title and make up the bulk of the card Some quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the card'    
  },
{ headertext:'VIPONAH',
  text:'Some quick example text to build on the card title and make up the bulk of the card Some quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the card'    
},{ headertext:'ARTICON',
text:'Some quick example text to build on the card title and make up the bulk of the card Some quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the bulk of the card'    
},
]

  constructor() { }

  ngOnInit(): void {
  }

}
