import { downgradeInjectable, downgradeComponent } from '@angular/upgrade/static';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppModule } from './app.module';
import {Router} from '@angular/router';
import { ng2SettingsComponent } from './ng2Settings.component';

declare var angular: angular.IAngularStatic;

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  // upgrades & downgrades
  // angular.module('app').directive('settings', downgradeComponent({component: ng2SettingsComponent}));
  
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['app']);
  setTimeout(() => {
    // this appears to be required if the initial route is a ng2 route, otherwise it won't show up    
    platformRef.injector.get(Router).initialNavigation();
  }, 0);
  console.log('hybrid app bootstrapped');
});
