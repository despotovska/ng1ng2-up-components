import { Component, Inject } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'settings',
  template: '<h2>This is the Settings Page</h2>'
})
export class ng2SettingsComponent {

  constructor(
    ) {
    console.log('loaded ng2 component')
    
  }
  
}