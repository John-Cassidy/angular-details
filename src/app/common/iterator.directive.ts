import {
    Directive, ViewContainerRef, TemplateRef,
    Input, SimpleChange, IterableDiffer, IterableDiffers,
    ChangeDetectorRef, CollectionChangeRecord, DefaultIterableDiffer, ViewRef, OnInit, DoCheck
} from '@angular/core';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[paForOf]'
})
export class PaIteratorDirective implements OnInit, DoCheck {
    // tslint:disable-next-line: deprecation
    private differ: DefaultIterableDiffer<any>;
    private views: Map<any, PaIteratorContext> = new Map<any, PaIteratorContext>();

    constructor(private container: ViewContainerRef,
                private template: TemplateRef<object>,
                private differs: IterableDiffers,
                private changeDetector: ChangeDetectorRef) {
    }

    @Input('paForOf')
    dataSource: any;

    ngOnInit() {
        this.differ =
             // tslint:disable-next-line: deprecation
             this.differs.find(this.dataSource).create() as DefaultIterableDiffer<any>;
    }

    ngDoCheck() {
        let changes = this.differ.diff(this.dataSource);
        if (changes != null) {
            changes.forEachAddedItem(addition => {
                let context = new PaIteratorContext(addition.item,
                    addition.currentIndex, changes.length);
                context.view = this.container.createEmbeddedView(this.template,
                    context);
                this.views.set(addition.trackById, context);
            });
            let removals = false;
            changes.forEachRemovedItem(removal => {
                removals = true;
                let context = this.views.get(removal.trackById);
                if (context != null) {
                    this.container.remove(this.container.indexOf(context.view));
                    this.views.delete(removal.trackById);
                }
            });
            if (removals) {
                let index = 0;
                this.views.forEach(context =>
                    context.setData(index++, this.views.size));
            }
        }
    }
}

class PaIteratorContext {
    index: number;
    odd: boolean; even: boolean;
    first: boolean; last: boolean;
    view: ViewRef;

    constructor(public $implicit: any,
                public position: number, total: number) {
        this.setData(position, total);
    }

    setData(index: number, total: number) {
        this.index = index;
        this.odd = index % 2 === 1;
        this.even = !this.odd;
        this.first = index === 0;
        this.last = index === total - 1;
    }
}
