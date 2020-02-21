import { Component, Input } from '@angular/core';
import { DiscountService } from '../common/discount.service';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'paDiscountEditor',
    template: `<div class="form-group">
                   <label>Discount</label>
                   <input [(ngModel)]="discounter.discount"
                        class="form-control" type="number" />
               </div>`
})
export class PaDiscountEditorComponent {

    constructor(public discounter: DiscountService) { }
}
