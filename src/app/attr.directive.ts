import {
  Directive, ElementRef, Attribute, Input,
  SimpleChange, Output, EventEmitter, HostListener, HostBinding, OnInit, OnChanges
} from '@angular/core';
import { Product } from './product.model';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[pa-attr]'
})
export class PaAttrDirective implements OnInit, OnChanges {


  constructor(private element: ElementRef) {

  }

  @Input('pa-attr')
  @HostBinding('class')
  bgClass: string;

  // tslint:disable-next-line: no-input-rename
  @Input('pa-product')
  product: Product;

  // tslint:disable-next-line: no-output-rename
  @Output('pa-category')
  click = new EventEmitter<string>();

  // // tslint:disable-next-line: no-output-rename
  // @Output('pa-category')
  // click = new EventEmitter<string>();

  ngOnInit(): void {
    this.element.nativeElement.classList.add(this.bgClass || 'bg-success');
  }
  ngOnChanges(changes: {[property: string]: SimpleChange }): void {
    let change = changes.bgClass;
    let classList = this.element.nativeElement.classList;

    if (!change.isFirstChange() && classList.contains(change.previousValue)) {
      classList.remove(change.previousValue);
    }
    if (!classList.contains(change.currentValue)) {
      classList.add(change.currentValue);
    }
  }

  @HostListener('click')
    triggerCustomEvent() {
        if (this.product != null) {
            this.click.emit(this.product.category);
        }
    }
}
