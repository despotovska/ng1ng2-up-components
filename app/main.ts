import { downgradeInjectable, downgradeComponent } from '@angular/upgrade/static';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppModule } from './app.module';


import { ng2ParentComponent } from './ng2Parent.component';

declare var angular: angular.IAngularStatic;

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  
  angular.module('app').directive('parent', downgradeComponent({component: ng2ParentComponent}));
  // angular.module('app').factory('nameParser', downgradeInjectable(NameParser));

  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['app']);
  console.log('hybrid app bootstrapped');
});
