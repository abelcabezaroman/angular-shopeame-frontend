import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsLocalService {

  products = [];

  constructor() { }

  getProducts() {
    return this.products
  }

  addProducts(products) {
    for (const product of products) {
      this.products.push(product);
    }
  }

}
