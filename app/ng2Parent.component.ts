import { Component, Inject } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'parent',
  templateUrl: 'ng2Parent.component.html'
})
export class ng2ParentComponent {

  constructor(
    ) {
    console.log('loaded ng2 component')
    
  }
  
}