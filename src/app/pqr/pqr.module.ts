import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PqrComponent } from './pqr.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion/public_api';

@NgModule({
  declarations: [PqrComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
  ]
})
export class PqrModule { }
