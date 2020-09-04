import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-gallery',
  templateUrl: './products-gallery.component.html',
  styleUrls: ['./products-gallery.component.scss']
})
export class ProductsGalleryComponent implements OnInit {

  @Input() products

  constructor() { }

  ngOnInit(): void {
  }

}
