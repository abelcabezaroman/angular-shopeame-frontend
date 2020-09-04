import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';



@NgModule({
  declarations: [ProductComponent],
  exports: [
    ProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
