import { Directive, HostBinding } from '@angular/core';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: 'td[applyColor]'
})
// tslint:disable-next-line: directive-class-suffix
export class PaCellColor {

    @HostBinding('class')
    bgClass: string = '';

    setColor(dark: boolean) {
        this.bgClass = dark ? 'bg-dark' : '';
    }
}
