import {
    Directive, SimpleChange, ViewContainerRef, TemplateRef, Input, OnChanges
} from '@angular/core';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[paIf]'
})
export class PaStructureDirective implements OnChanges {

    constructor(private container: ViewContainerRef,
                private template: TemplateRef<object>) { }

    @Input('paIf')
    expressionResult: boolean;

    ngOnChanges(changes: { [property: string]: SimpleChange }) {
        let change = changes['expressionResult'];
        if (!change.isFirstChange() && !change.currentValue) {
            this.container.clear();
        } else if (change.currentValue) {
            this.container.createEmbeddedView(this.template);
        }
    }
}
