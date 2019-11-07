// products.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PqrService {

  uri =  environment.apiUrl+'/pqr/producttype';


  constructor(private http: HttpClient, private router: Router) { }

  getPqrPieChart() {
    return this
      .http
      .get(`${this.uri}`);
  }

}
