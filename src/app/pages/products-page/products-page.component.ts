import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../shared/services/products.service";
import { take } from "rxjs/operators";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  products = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();

  }

  deleteProduct(idProduct) {
    this.productsService.deleteProduct(idProduct).pipe(take(1)).subscribe(() => {
      this.getProducts();
    })
  }

  getProducts() {
    this.productsService.getProducts().pipe(take(1)).subscribe((products: any) => {
      this.products = products;
    })
  }

}
