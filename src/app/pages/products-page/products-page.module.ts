import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsPageRoutingModule } from './products-page-routing.module';
import { ProductsPageComponent } from './products-page.component';
import { ProductsGalleryComponent } from "./components/products-gallery/products-gallery.component";
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [ProductsPageComponent, ProductsGalleryComponent],
  imports: [
    CommonModule,
    ProductsPageRoutingModule,
    SharedModule
  ]
})
export class ProductsPageModule { }
