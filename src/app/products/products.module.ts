import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion/public_api';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
  ]
})
export class PqrModule { }
