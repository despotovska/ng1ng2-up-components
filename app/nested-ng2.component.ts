import { Component, Inject } from '@angular/core';

@Component({
  selector: 'nested2',
  template: '<h2>This is a nested ng2 component</h2>'
})
export class NestedNg2Component {

  constructor() {
    console.log('loaded ng2 component');
    
  }
  
}