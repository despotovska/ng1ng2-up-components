import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UpgradeModule } from '@angular/upgrade/static';
import { ng2ParentComponent } from './ng2Parent.component';
import { ng1ChildComponent } from './ng1Child.component';
import { RouterUpgradeInitializer, setUpLocationSync } from '@angular/router/upgrade';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    FormsModule
  ],
  entryComponents: [
    ng2ParentComponent
  ],
  declarations: [
    ng2ParentComponent,
    ng1ChildComponent
  ],
  providers: [
    
  ]
})
export class AppModule {
  ngDoBootstrap() {}
}
