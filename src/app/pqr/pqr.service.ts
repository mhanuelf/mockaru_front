// products.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PqrService {

  uri = 'http://127.0.0.1:3000/dashboard/pqr/producttype';


  constructor(private http: HttpClient, private router: Router) { }

  getPqrPieChart() {
    return this
      .http
      .get(`${this.uri}`);
  }

}
