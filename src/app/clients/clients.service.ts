// products.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  uri = environment.apiUrl + '/client';
  uriPqr = environment.apiUrl + '/client/complain';


  constructor(private http: HttpClient, private router: Router) { }

  getComplain(tipoRadicacion, descripcionCaso) {
    return this
      .http
      .get(`${this.uriPqr}/${tipoRadicacion}/${descripcionCaso}`);
  }
}
