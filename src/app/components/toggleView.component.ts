import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'paToggleView',
    templateUrl: 'toggleView.component.html'
})
// tslint:disable-next-line: component-class-suffix
export class PaToggleView {

    showContent: boolean = true;
}
