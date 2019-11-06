import { Component, OnInit } from '@angular/core';
import PqrPieChart from './pqr.piechart';
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
  data  =[];
  width = 550;
  height = 400;

  constructor(private pqrService: PqrService) { }

  ngOnInit() {
    this.pqrService
      .getPqrPieChart()
      .subscribe((data: PqrPieChart[]) => {
        this.data = data;
      });
  }

  onSelect(selectedItem) {
    console.log("selected: ", selectedItem[0].row);
    console.log("selectedItem", this.data[selectedItem[0].row][2]);
  }


}
