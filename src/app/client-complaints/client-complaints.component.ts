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
  constructor(private route: ActivatedRoute, private router: Router, private clientComplaintsService: ClientComplaintsService) { }

  ngOnInit() {
    
  }

  clientComplain(id){
    this.clientComplaintsService.getClientComplain(id)
    .subscribe(resp => {
    this.clientCollection = resp;
  });


}
}