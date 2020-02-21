import {
    Directive, Input, Output, EventEmitter,
    SimpleChange, ContentChildren, QueryList, OnChanges, AfterContentInit
} from '@angular/core';
import { PaCellColor } from './cellColor.directive';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: 'table'
})
// tslint:disable-next-line: directive-class-suffix
export class PaCellColorSwitcher implements OnChanges, AfterContentInit {

    @Input('paCellDarkColor')
    // tslint:disable-next-line: ban-types
    modelProperty: boolean;

    @ContentChildren(PaCellColor)
    contentChildren: QueryList<PaCellColor>;

    ngOnChanges(changes: { [property: string]: SimpleChange }) {
        this.updateContentChildren(changes['modelProperty'].currentValue);
    }

    ngAfterContentInit() {
        this.contentChildren.changes.subscribe(() => {
            setTimeout(() => this.updateContentChildren(this.modelProperty), 0);
        });
    }

    private updateContentChildren(dark: boolean) {
        if (this.contentChildren != null && dark !== undefined) {
            this.contentChildren.forEach((child, index) => {
                child.setColor(index % 2 ? dark : !dark);
            });
        }
    }
}
