import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';
import { PqrComponent } from './pqr/pqr.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PqrService } from './pqr/pqr.service';
import { ProductsService } from './products/products.service';

import { GoogleChartsModule } from 'angular-google-charts';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';

@NgModule({
  declarations: [
    ProductsComponent,
    ClientsComponent,
    PqrComponent,
    DashboardComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    NgxBootstrapSliderModule
  ],
  providers: [PqrService, ProductsService],
  bootstrap: [DashboardComponent]
})
export class AppModule { }
