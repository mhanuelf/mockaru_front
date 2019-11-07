import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import FinancialInfo from './financial-info';
import { FinancialInfoService } from './financial-info.service';


@Component({
  selector: 'app-financial-info',
  templateUrl: './financial-info.component.html',
  styleUrls: ['./financial-info.component.css']
})
export class FinancialInfoComponent implements OnInit {


  client: any = {};
  canalesCollection: any = [];
  ofertasCollection: any = [];
  infoFinancieraCollection: any = [];
  isFirstOpen = true;
  customClass = 'customClass';

  constructor(private route: ActivatedRoute, private router: Router, private financialInfoService: FinancialInfoService) { }

  ngOnInit() {


    this.ofertasCollection = [

      {
        descripcion: 'Crédito libre inversión 13% EA',
      },
      {
        descripcion: 'Compra de cartera 12% EA',
      },
      {
        descripcion: 'Crédito Hipotecario 10% EA',
      },
      {
        descripcion: 'Cesion Hipoteca 9% EA',
      },
      {
        descripcion: 'CDT tasa preferencial pactada',
      },
      {
        descripcion: 'Tarjeta de crédito sin couta de manejo',
      },
      {
        descripcion: 'Retiro en cajeros sin costo',
      }

    ];


    this.route.params.subscribe(params => {
      this.financialInfoService.getClientDetail(params.id)
        .subscribe(resp => {
          this.client = resp;
        });

      this.financialInfoService.getCanales(params.id)
        .subscribe(resp => {
          this.canalesCollection = resp;
        });

      this.financialInfoService.getInfoFinanciera(params.id)
        .subscribe(resp => {
          this.infoFinancieraCollection = resp;
        });

    });
  }


}
