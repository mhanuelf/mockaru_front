import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { ActivatedRoute, Router } from '@angular/router';


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
  filterargs = {title: 'PR'};
  show = true;

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

  showComplaint(descripcionCaso) {
    this.router.navigate(['clients/complain/',descripcionCaso]);
  }

/*  transform(items: any[], filter: Object): any {
    if (!items || !filter) {
        return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => item.title.indexOf(filter) !== -1);
}*/

}
