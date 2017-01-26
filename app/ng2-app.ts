import { Component } from '@angular/core'

@Component({
  selector: 'ng2-app',
  template: `
    <a href="#/settings">Settings (ng2 route)</a>
    <a href="#/home">Home (ng1 route)</a>
    <a href="#/users">Users (ng1 route)</a>

    <div class="ng-view"></div>
    <router-outlet></router-outlet>
  `
})
export class Ng2AppComponent {
  constructor() {}

  ngOnInit() {

  }
  
}