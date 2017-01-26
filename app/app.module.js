"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var static_1 = require("@angular/upgrade/static");
var ng2_app_1 = require("./ng2-app");
// import { SettingsModule } from './settings.module';
var router_1 = require("@angular/router");
var ng2Settings_component_1 = require("./ng2Settings.component");
// this class needs to appear before it's used. classes aren't hoisted. 
// probably best to put it in its own file & import it.
var Ng1Ng2UrlHandlingStrategy = (function () {
    function Ng1Ng2UrlHandlingStrategy() {
    }
    Ng1Ng2UrlHandlingStrategy.prototype.shouldProcessUrl = function (url) { return url.toString().startsWith("/settings"); };
    Ng1Ng2UrlHandlingStrategy.prototype.extract = function (url) { return url; };
    Ng1Ng2UrlHandlingStrategy.prototype.merge = function (url, whole) { return url; };
    return Ng1Ng2UrlHandlingStrategy;
}());
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            static_1.UpgradeModule,
            forms_1.FormsModule,
            // SettingsModule,
            // the empty array here is fine, since the routes will be picked up from the imported modules
            // in this case, it's the SettingsModule that has a route
            router_1.RouterModule.forRoot([
                { path: 'settings', component: ng2Settings_component_1.ng2SettingsComponent }
            ], { useHash: true, initialNavigation: false })
        ],
        entryComponents: [
            ng2_app_1.Ng2AppComponent
        ],
        declarations: [
            ng2_app_1.Ng2AppComponent,
            ng2Settings_component_1.ng2SettingsComponent
        ],
        providers: [
            { provide: router_1.UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy }
        ],
        bootstrap: [
            ng2_app_1.Ng2AppComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map