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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var schedule_component_1 = require('./schedule.component');
var agenda_component_1 = require('./agenda.component');
var jan1_component_1 = require('./jan1.component');
var jan2_component_1 = require('./jan2.component');
var filteredJan1_component_1 = require('./filteredJan1.component');
var posts_services_1 = require('./services/posts.services');
var http_1 = require('@angular/http');
var app_routing_1 = require('./routing/app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routing_1.routing],
            declarations: [app_component_1.AppComponent, schedule_component_1.ScheduleComponent, agenda_component_1.AgendaComponent, jan1_component_1.Jan1Component, filteredJan1_component_1.FilteredJan1Component, jan2_component_1.Jan2Component],
            providers: [posts_services_1.PostService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map