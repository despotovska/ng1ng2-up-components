"use strict";
var static_1 = require("@angular/upgrade/static");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var static_2 = require("@angular/upgrade/static");
var app_module_1 = require("./app.module");
var ng2Parent_component_1 = require("./ng2Parent.component");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule).then(function (platformRef) {
    angular.module('app').directive('parent', static_1.downgradeComponent({ component: ng2Parent_component_1.ng2ParentComponent }));
    // angular.module('app').factory('nameParser', downgradeInjectable(NameParser));
    var upgrade = platformRef.injector.get(static_2.UpgradeModule);
    upgrade.bootstrap(document.documentElement, ['app']);
    console.log('hybrid app bootstrapped');
});
//# sourceMappingURL=main.js.map