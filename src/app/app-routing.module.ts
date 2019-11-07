// app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PqrComponent } from './pqr/pqr.component';
import { ProductsComponent } from './products/products.component';
import { FinancialInfoComponent } from './financial-info/financial-info.component';
import { ClientsComponent } from './clients/clients.component';
const routes: Routes = [
  {
    path: '',
    component: PqrComponent
  },
  {
    path: 'products/:id',
    component: ProductsComponent
  },
  {
    path: 'financial-info/:id',
    component: FinancialInfoComponent
  },
  {
    path: 'clients',
    component: ClientsComponent
  },
  {
    path: 'clients/complain/:tipoRadicacion/:descripcionCaso',
    component: ClientsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
