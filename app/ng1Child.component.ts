import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
@Directive({
  selector: 'child'
})
export class ng1ChildComponent extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('child', elementRef, injector);
  }
}
