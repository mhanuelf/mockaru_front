// products.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientComplaintsService {

  uri = environment.apiUrl + '/complain/client';
  uri_client = environment.apiUrl + '/client';
  
  constructor(private http: HttpClient, private router: Router) { }



  getClientComplain(id) {
    return this
      .http
      .get(`${this.uri}/${id}`);
  }

  getClientDetail(clientId) {
    return this
      .http
      .get(`${this.uri_client}/${clientId}`);
  }

}
