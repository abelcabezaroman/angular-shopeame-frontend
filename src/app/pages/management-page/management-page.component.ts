import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { ProductsLocalService } from "../../shared/services/local/products-local.service";

@Component({
  selector: 'app-management-page',
  templateUrl: './management-page.component.html',
  styleUrls: ['./management-page.component.scss']
})
export class ManagementPageComponent implements OnInit {

  formGroupManagementPage;

  constructor(private formBuilder: FormBuilder, private productsLocalService: ProductsLocalService) { }

  ngOnInit(): void {
    this.formGroupManagementPage = this.formBuilder.group({
      name: ['Product'],
      description: ['Description'],
      price: ['5'],
      image: ['http://acronico.es/wp-content/uploads/2018/09/20180904_203016.jpg'],
      stars: ['5'],
    })
  }

  addProduct(){
    this.productsLocalService.addProducts([this.formGroupManagementPage.value])
  }

}
