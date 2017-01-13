import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ng2SettingsComponent } from './ng2Settings.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'settings', component: ng2SettingsComponent }
    ])
  ],
  entryComponents: [
    ng2SettingsComponent
  ],
  declarations: [
    ng2SettingsComponent
  ],
  providers: [
  ],
  bootstrap: [
  ]
})
export class SettingsModule {
}
