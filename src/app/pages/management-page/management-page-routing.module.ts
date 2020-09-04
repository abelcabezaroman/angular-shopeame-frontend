import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsPageComponent } from "../products-page/products-page.component";
import { ManagementPageComponent } from "./management-page.component";


const routes: Routes = [
  {
    path: '', component: ManagementPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementPageRoutingModule { }
