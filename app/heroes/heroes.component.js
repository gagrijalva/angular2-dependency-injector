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
var hero_list_component_1 = require('./hero-list.component');
var hero_service_provider_1 = require('./hero.service.provider');
var HeroesComponent = (function () {
    function HeroesComponent() {
    }
    HeroesComponent = __decorate([
        core_1.Component({
            selector: 'my-heroes',
            template: "\n  <h2>Heroes</h2>\n  <hero-list></hero-list>\n  ",
            providers: [hero_service_provider_1.heroServiceProvider],
            directives: [hero_list_component_1.HeroListComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map