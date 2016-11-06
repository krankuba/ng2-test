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
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
// used to create fake backend
var index_1 = require('./auth/_helpers/index');
var testing_1 = require('@angular/http/testing');
var http_2 = require('@angular/http');
// end of fake backend
// system imports here
var app_component_1 = require('./app.component');
var app_routing_module_1 = require('./app-routing.module');
// end of system imports
// content
var home_component_1 = require('./home/home.component');
var about_component_1 = require('./about/about.component');
var index_2 = require('./auth/_directives/index');
var index_3 = require('./auth/_guards/index');
var index_4 = require('./auth/users/index');
var index_5 = require('./auth/login/index');
var index_6 = require('./auth/register/index');
var auth_component_1 = require('./auth/auth.component');
var index_7 = require('./auth/_services/index');
// end of content
// material 2
var core_2 = require('@angular2-material/core');
var card_1 = require('@angular2-material/card');
var button_1 = require('@angular2-material/button');
var icon_1 = require('@angular2-material/icon');
var icon_2 = require('@angular2-material/icon');
var menu_1 = require('@angular2-material/menu');
var toolbar_1 = require('@angular2-material/toolbar');
var checkbox_1 = require('@angular2-material/checkbox');
var progress_circle_1 = require('@angular2-material/progress-circle');
//
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule,
                // for material
                core_2.MdCoreModule,
                card_1.MdCardModule,
                button_1.MdButtonModule,
                icon_1.MdIconModule,
                menu_1.MdMenuModule,
                toolbar_1.MdToolbarModule,
                checkbox_1.MdCheckboxModule,
                progress_circle_1.MdProgressCircleModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                index_2.AlertComponent,
                index_4.UsersComponent,
                auth_component_1.AuthComponent,
                index_5.LoginComponent,
                index_6.RegisterComponent
            ],
            providers: [
                index_3.AuthGuard,
                index_7.AlertService,
                index_7.AuthenticationService,
                index_7.UserService,
                // providers used to create fake backend
                index_1.fakeBackendProvider,
                testing_1.MockBackend,
                http_2.BaseRequestOptions,
                // for material
                icon_2.MdIconRegistry,
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map