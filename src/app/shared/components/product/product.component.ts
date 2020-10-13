import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product;
  @Input() isPrev = false;
  @Output() deleteClickEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteProduct(idProduct){
    this.deleteClickEmitter.emit(idProduct)
  }

}
