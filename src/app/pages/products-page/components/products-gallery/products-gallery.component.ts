import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-gallery',
  templateUrl: './products-gallery.component.html',
  styleUrls: ['./products-gallery.component.scss']
})
export class ProductsGalleryComponent implements OnInit {

  @Input() products
  @Output() deleteClickEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteProduct(idProduct){
    this.deleteClickEmitter.emit(idProduct);
  }

}
