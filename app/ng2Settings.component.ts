import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'settings',
  // you can nest ng2 components in a ng2 routed ng2 component
  template: '<h2>This is the Settings Page</h2><nested2></nested2>'
  // but you can't nest ng1 components in a ng2 routed ng2 component
  // template: '<h2>This is the Settings Page</h2><nested></nested><nested2></nested2>'
  // template: '<h2>This is the Settings Page</h2>'
})
export class ng2SettingsComponent {

  constructor(private router: Router) {
    console.log('loaded ng2 component');
    
  }
  
}