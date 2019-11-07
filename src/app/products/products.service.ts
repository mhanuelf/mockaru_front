// products.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  uri = 'http://127.0.0.1:3000/dashboard/product';
  uriPqr = 'http://127.0.0.1:3000/dashboard/pqr';


  constructor(private http: HttpClient, private router: Router) { }

  getProduct(id) {
    return this
      .http
      .get(`${this.uri}/${id}`);
  }

  getPQR(id) {
    return this
      .http
      .get(`${this.uriPqr}/${id}`);
  }

}
