import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UpgradeModule } from '@angular/upgrade/static';
import { Ng2AppComponent } from './ng2-app';
// import { SettingsModule } from './settings.module';
import { RouterModule, UrlHandlingStrategy } from '@angular/router';
import { ng2SettingsComponent } from './ng2Settings.component';
import { NestedNg1Component } from './nested-ng1.component';
import { NestedNg2Component } from './nested-ng2.component';


// this class needs to appear before it's used. classes aren't hoisted. 
// probably best to put it in its own file & import it.
class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) { console.log('match', url.toString().startsWith("/settings"), url.toString()); return url.toString().startsWith("/settings"); }
  extract(url) { return url; }
  merge(url, whole) { return url; }
}

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    FormsModule,
    // SettingsModule,
    // the empty array here is fine, since the routes will be picked up from the imported modules
    // in this case, it's the SettingsModule that has a route
    RouterModule.forRoot([
      // { path: 'settings', component: ng2SettingsComponent }
      { path: 'settings', children: [
        { path: '', component: ng2SettingsComponent }
      ] },
    // ])
    ], {useHash: true })
  ],
  entryComponents: [
    // Ng2AppComponent,
    NestedNg2Component,
    // ng2SettingsComponent
  ],
  declarations: [
    Ng2AppComponent,
    ng2SettingsComponent,
    NestedNg1Component,
    NestedNg2Component
  ],
  providers: [
    { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy },
    { provide: '$scope', useExisting: '$rootScope' } // I have to do this cause we do not provide $scope in the module. Seems to be broken.
  ],
  bootstrap: [
    Ng2AppComponent
  ]
})
export class AppModule {
}

