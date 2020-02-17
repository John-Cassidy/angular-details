import {
  Directive, ElementRef, Attribute, Input,
  SimpleChange, Output, EventEmitter, HostListener, HostBinding
} from '@angular/core';
import { Product } from './product.model';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[pa-attr]'
})
export class PaAttrDirective {

  constructor(element: ElementRef, @Attribute('pa-attr') bgClass: string) {
    element.nativeElement.classList.add(bgClass || 'bg-success', 'text-white');
  }

  // @Input('pa-attr')
  // @HostBinding('class')
  // bgClass: string;

  // // tslint:disable-next-line: no-input-rename
  // @Input('pa-product')
  // product: Product;

  // // tslint:disable-next-line: no-output-rename
  // @Output('pa-category')
  // click = new EventEmitter<string>();

  // @HostListener('click')
  // triggerCustomEvent() {
  //     if (this.product != null) {
  //         this.click.emit(this.product.category);
  //     }
  // }
}
