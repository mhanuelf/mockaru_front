// products.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  uri = environment.apiUrl+'/product';
  uriPqr = environment.apiUrl+'/pqr';


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
