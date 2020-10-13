import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // products$ = new ReplaySubject(1);

  constructor(private http: HttpClient) { }

  // updateProducts$(products){
  //   this.products$.next(products)
  // }

  // getProducts$(){
  //   return this.products$;
  // }

  getProducts(){
    return this.http.get(environment.url + 'products');
  }

  deleteProduct(idProduct){
    return this.http.delete(environment.url + 'products/' + idProduct);
  }

  addProduct(product){
    return this.http.post(environment.url + 'products', product);
  }
}
