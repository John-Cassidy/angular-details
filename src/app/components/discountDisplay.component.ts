import { Component, Input } from '@angular/core';
import { DiscountService } from '../common/discount.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'paDiscountDisplay',
  template: `<div class="bg-info text-white p-2">
                The discount is {{discounter.discount}}
               </div>`
})
export class PaDiscountDisplayComponent {

  constructor(public discounter: DiscountService) { }
}
