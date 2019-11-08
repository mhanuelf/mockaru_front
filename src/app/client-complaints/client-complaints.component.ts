import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientComplaintsService } from './client-complaints.service';

@Component({
  selector: 'app-client-complaints',
  templateUrl: './client-complaints.component.html',
  styleUrls: ['./client-complaints.component.css']
})

export class ClientComplaintsComponent implements OnInit {
  clientCollection: any = [];
  client: any = {};
  constructor(private route: ActivatedRoute, private router: Router, private clientComplaintsService: ClientComplaintsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.clientComplaintsService.getClientDetail(params.id)
        .subscribe(resp => {
          this.client = resp;
        });

        this.clientComplaintsService.getClientComplain(params.id)
      .subscribe(resp => {
        this.clientCollection = resp;
      });
      });
  }
}