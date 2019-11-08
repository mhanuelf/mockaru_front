// products.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FinancialInfoService {

  uri_client = environment.apiUrl + '/client';
  uri_canales = environment.apiUrl + '/channel';
  uri_infoFinanciera = environment.apiUrl + '/client/finantial';

  constructor(private http: HttpClient, private router: Router) { }

  getClientDetail(clientId) {
    return this
      .http
      .get(`${this.uri_client}/${clientId}`);
  }

  getCanales(clientId) {
    return this
      .http
      .get(`${this.uri_canales}/${clientId}`);
  }

  getInfoFinanciera(clientId) {
    return this
      .http
      .get(`${this.uri_infoFinanciera}/${clientId}`);
  }

}
