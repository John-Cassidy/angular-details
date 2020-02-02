import { Component, OnInit } from '@angular/core';
import { Model } from './repository.model';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {

  public model: Model = new Model();

  constructor() { }

  ngOnInit() {
  }

  getProductByPosition(position: number): Product {
    return this.model.getProducts()[position];
  }

  getClassesByPosition(position: number): string {
    const product = this.getProductByPosition(position);
    return 'p-2 ' + (product.price < 50 ? 'bg-info' : 'bg-warning');
  }

}
