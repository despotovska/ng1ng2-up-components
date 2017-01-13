import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UpgradeModule } from '@angular/upgrade/static';
import { ng2ParentComponent } from './ng2Parent.component';
import { ng1ChildComponent } from './ng1Child.component';
import { RouterUpgradeInitializer, setUpLocationSync } from '@angular/router/upgrade';
import { Ng2AppComponent } from './ng2-app';
import { ng2SettingsComponent } from './ng2Settings.component';
import { SettingsModule } from './settings.module';
import { RouterModule, UrlHandlingStrategy } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    FormsModule,
    SettingsModule,
    RouterModule.forRoot([
    ], {useHash: true, initialNavigation: false })
  ],
  entryComponents: [
    ng2ParentComponent
    // ng2SettingsComponent
  ],
  declarations: [
    ng2ParentComponent,
    ng1ChildComponent,
    Ng2AppComponent
    // ng2SettingsComponent
  ],
  providers: [
    { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy }
  ],
  bootstrap: [
    Ng2AppComponent
  ]
})
export class AppModule {
  //ngDoBootstrap() {}
}

class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) { return url.toString().startsWith("/settings"); }
  extract(url) { return url; }
  merge(url, whole) { return url; }
}

