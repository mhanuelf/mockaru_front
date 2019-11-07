import { Component, OnInit } from '@angular/core';
import { ClientsService } from './clients.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  client: any = {};
  clientCollection: any = [];
  constructor(private route: ActivatedRoute, private router: Router, private clientsService: ClientsService) { }

  isFirstOpen = true;

  pqrText: String;

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.pqrText = params.descripcionCaso;
      this.clientsService.getComplain(params.tipoRadicacion,params.descipcionCaso)
        .subscribe(resp => {
          this.clientCollection = resp;
        });
    });
  }

  showFinancialInfo(identificacion) {
    this.router.navigate(['financial-info/', identificacion]);
  }


}
