"use strict";
var static_1 = require("@angular/upgrade/static");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var static_2 = require("@angular/upgrade/static");
var app_module_1 = require("./app.module");
var router_1 = require("@angular/router");
var nested_ng2_component_1 = require("./nested-ng2.component");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule).then(function (platformRef) {
    // upgrades & downgrades
    angular.module('app').directive('nested2', static_1.downgradeComponent({ component: nested_ng2_component_1.NestedNg2Component }));
    var upgrade = platformRef.injector.get(static_2.UpgradeModule);
    upgrade.bootstrap(document.documentElement, ['app']);
    setTimeout(function () {
        // this appears to be required if the initial route is a ng2 route, otherwise it won't show up    
        platformRef.injector.get(router_1.Router).initialNavigation();
    }, 0);
    console.log('hybrid app bootstrapped');
});
//# sourceMappingURL=main.js.map