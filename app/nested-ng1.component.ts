import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
@Directive({
  selector: 'nested'
})
export class NestedNg1Component extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('nested', elementRef, injector);
  }
}
