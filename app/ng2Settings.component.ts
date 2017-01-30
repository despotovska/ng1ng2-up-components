import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'settings',
  template: '<h2>This is the Settings Page</h2><nested></nested><nested2></nested2>'
})
export class ng2SettingsComponent {

  constructor(private router: Router) {
    console.log('loaded ng2 component');
    
  }
  
}