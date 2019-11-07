// products.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FinancialInfoService {

  uri_client = 'http://127.0.0.1:3000/dashboard/client';
  uri_canales = 'http://127.0.0.1:3000/dashboard/channel';
  uri_infoFinanciera = 'http://127.0.0.1:3000/dashboard/client/finantial';

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
