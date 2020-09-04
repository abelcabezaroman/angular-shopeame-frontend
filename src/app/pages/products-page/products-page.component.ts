import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../shared/services/products.service";
import { take } from "rxjs/operators";
import { ProductsLocalService } from "../../shared/services/local/products-local.service";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  products = [];

  constructor(private productsService: ProductsService, private productsLocalService: ProductsLocalService) { }

  ngOnInit(): void {
    const productsLocal = this.productsLocalService.getProducts();
    if (!productsLocal.length) {
      this.productsService.getProducts().pipe(take(1)).subscribe((products: any) => {
        this.products = products;
        this.productsLocalService.addProducts(products);
      })
    } else {
      this.products = productsLocal;
    }

  }

}
