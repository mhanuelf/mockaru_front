import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor() { }

    isFirstOpen = true;
    ngOnInit() {

     /* this.route.params.subscribe(params => {
        this.productsService.getProduct(params.id)
          .subscribe(resp => {
            this.product = resp;
          });
  
        this.productsService.getPQR(params.id)
          .subscribe(resp => {
            this.pqrCollection = resp;
          });
  
      });*/
    }
  
  

}
