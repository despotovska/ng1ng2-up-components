import { Component } from '@angular/core'

@Component({
  selector: 'ng2-app',
  template: `
    <a href="#/settings">Settings Route (ng2 route)</a>
    <div class="ng-view"></div>
    <router-outlet></router-outlet>
  `
  //
})
export class Ng2AppComponent {
  constructor() {}

  ngOnInit() {

  }
  
}