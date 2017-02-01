"use strict";
var static_1 = require("@angular/upgrade/static");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var static_2 = require("@angular/upgrade/static");
var app_module_1 = require("./app.module");
var nested_ng2_component_1 = require("./nested-ng2.component");
var upgrade_1 = require("@angular/router/upgrade");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule).then(function (platformRef) {
    // upgrades & downgrades
    angular.module('app').directive('nested2', static_1.downgradeComponent({ component: nested_ng2_component_1.NestedNg2Component }));
    var upgrade = platformRef.injector.get(static_2.UpgradeModule);
    upgrade.bootstrap(document.documentElement, ['app']);
    // this doesn't appear to be required
    // setTimeout(() => {
    //   // this appears to be required if the initial route is a ng2 route, otherwise it won't show up    
    //   platformRef.injector.get(Router).initialNavigation();
    // }, 0);
    // is this only for push state routing? or also for # routing?
    upgrade_1.setUpLocationSync(upgrade);
    console.log('hybrid app bootstrapped');
});
//# sourceMappingURL=main.js.map