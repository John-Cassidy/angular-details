import { Component, OnInit } from '@angular/core';
import { Model } from './repository.model';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {

  constructor() { }

  public model: Model = new Model();
  public counter = 1;
  public targetName = 'Kayak';

  ngOnInit() {
  }

  getProductByPosition(position: number): Product {
    return this.model.getProducts()[position];
  }

  getClassesByPosition(position: number): string {
    const product = this.getProductByPosition(position);
    return 'p-2 ' + (product.price < 50 ? 'bg-info' : 'bg-warning');
  }

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  getProductCount(): number {
    return this.getProducts().length;
  }

  swapProduct() {
    this.model.swapProduct();
  }

  get nextProduct(): Product {
      return this.model.getProducts().shift();
  }

  getKey(index: number, product: Product) {
      return product.id;
  }

  getProductPrice(index: number): number {
      return Math.floor(this.getProduct(index).price);
  }
}
