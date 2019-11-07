import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { ActivatedRoute, Router } from '@angular/router';
import Products from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product: any = {};
  pqrCollection: any = [];
  isFirstOpen = true;
  customClass = 'customClass';

  constructor(private route: ActivatedRoute, private router: Router, private productsService: ProductsService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.productsService.getProduct(params.id)
        .subscribe(resp => {
          this.product = resp;
        });

      this.productsService.getPQR(params.id)
        .subscribe(resp => {
          this.pqrCollection = resp;
        });

    });
  }

  onClick() {
    this.router.navigate(['clients']);
  }

}
