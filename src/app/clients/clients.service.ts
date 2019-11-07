// products.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  uri = 'http://127.0.0.1:3000/dashboard/client';
  uriPqr = 'http://127.0.0.1:3000/dashboard/client/complain';
  


  constructor(private http: HttpClient, private router: Router) { }

  getComplain(descripcionCaso) {
    return this
      .http
      .get(`${this.uriPqr}/${descripcionCaso}`);
  }

 

  
}
