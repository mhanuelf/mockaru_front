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
import { FinancialInfoComponent } from './financial-info/financial-info.component';
import { FinancialInfoService } from './financial-info/financial-info.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PqrFilter } from './pqr/pqr.filter';
import { ClientComplaintsComponent } from './client-complaints/client-complaints.component';
import { FontAwesomeModule } from 'ngx-icons';
@NgModule({
  declarations: [
    ProductsComponent,
    ClientsComponent,
    PqrComponent,
    PqrFilter,
    DashboardComponent,
    FinancialInfoComponent,
    ClientComplaintsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    NgxBootstrapSliderModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [PqrService, ProductsService, FinancialInfoService],
  bootstrap: [DashboardComponent]
})
export class AppModule { }
