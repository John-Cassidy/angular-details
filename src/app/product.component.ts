import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Model } from './repository.model';
import { Product } from './product.model';
import { ProductFormGroup } from './form.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {

  constructor() { }

  model: Model = new Model();
  form: ProductFormGroup = new ProductFormGroup();
  // tslint:disable-next-line: no-inferrable-types
  formSubmitted: boolean = false;
  newProduct: Product = new Product();
  counter = 1;

  ngOnInit() {
  }

  getProductCount(): number {
    return this.getProducts().length;
  }

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  addProduct(p: Product) {
    console.log('New Product: ' + this.jsonProduct);
    this.model.saveProduct(p);
  }

  submitForm(form: NgForm) {
    this.form.productControls.forEach(
      c => (this.newProduct[c.modelProperty] = c.value)
    );
    this.formSubmitted = true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }
}
