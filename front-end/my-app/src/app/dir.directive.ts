import { Observable, observable, Subscription } from 'rxjs';
import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: "[direct]"
})
export class DirDirective implements OnInit, OnDestroy {

    @Input()
    direction: Observable<string> | undefined
    private subscription: Subscription | undefined

    constructor(private el: ElementRef, private renderer: Renderer2) { }


    ngOnInit() {
        if (this.direction) {
            this.subscription = this.direction.subscribe(dir => {
                if (dir === "ltr")
                    this.renderer.addClass(this.el.nativeElement, "ltr")
                else
                    this.renderer.removeClass(this.el.nativeElement, "ltr")
            })
        }

    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }
}