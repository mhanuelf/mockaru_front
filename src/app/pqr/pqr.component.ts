import { Component, OnInit } from '@angular/core';
import PqrPieChart from './pqr.piechart';

import { ActivatedRoute, Router } from '@angular/router';

import { PqrService } from './pqr.service';



@Component({
  selector: 'app-pqr',
  templateUrl: './pqr.component.html',
  styleUrls: ['./pqr.component.css']
})
export class PqrComponent implements OnInit {


  title = 'Peticiones, Quejas Reclamos';
  type = 'PieChart';

  columnNames = ['Producto', 'Cantidad'];
  options = {
  };
  data = [];
  clientCollection: any = [];
  width:Number  = 550;
  height:Number  = 400;

  isFirstOpen = true;
  customClass = 'customClass';
  weightProduct:Number = 50;
  weightChannel:Number = 50; 
  weightAmount:Number= 50;
  constructor(private route: ActivatedRoute, private router: Router, private pqrService: PqrService) { }



  ngOnInit() {
    this.pqrService
      .getPqrPieChart()
      .subscribe((data: PqrPieChart[]) => {
        this.data = data;
      });

      this.pqrService.getWeighing(this.weightProduct,this.weightChannel,this.weightAmount)
      .subscribe(resp => {
        this.clientCollection = resp;
      });

  }

  onSelect(selectedItem) {
    console.log("selected: ", selectedItem[0].row);
    console.log("selectedItem", this.data[selectedItem[0].row][2]);
    this.router.navigate(['products', this.data[selectedItem[0].row][2]]);
  }

  weighing(weightProduct,weightChannel,weightAmount){
        this.pqrService.getWeighing(weightProduct,weightChannel,weightAmount)
        .subscribe(resp => {
        this.clientCollection = resp;
      });
  }

}
