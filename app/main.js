"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var static_1 = require("@angular/upgrade/static");
var app_module_1 = require("./app.module");
var router_1 = require("@angular/router");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule).then(function (platformRef) {
    // upgrades & downgrades
    // angular.module('app').directive('settings', downgradeComponent({component: ng2SettingsComponent}));
    var upgrade = platformRef.injector.get(static_1.UpgradeModule);
    upgrade.bootstrap(document.documentElement, ['app']);
    setTimeout(function () {
        // this appears to be required if the initial route is a ng2 route, otherwise it won't show up    
        platformRef.injector.get(router_1.Router).initialNavigation();
    }, 0);
    console.log('hybrid app bootstrapped');
});
//# sourceMappingURL=main.js.map