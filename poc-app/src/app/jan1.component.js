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
var posts_services_1 = require('./services/posts.services');
var router_1 = require('@angular/router');
var router_2 = require('@angular/router');
var Jan1Component = (function () {
    function Jan1Component(post, router, route) {
        this.post = post;
        this.router = router;
        this.route = route;
        this.jan1 = [];
        this.showFilterOption = false;
    }
    Jan1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.posts = this.post.posts;
        console.log(this.posts);
        this.posts.subscribe(function (res) {
            _this.items = res;
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var data = res_1[_i];
                if (data.userId >= 1 && data.userId <= 5) {
                    _this.jan1.push(data);
                }
            }
        });
    };
    Jan1Component.prototype.showFilterOptions = function () {
        this.showFilterOption ? this.showFilterOption = false : this.showFilterOption = true;
    };
    Jan1Component.prototype.displayFilteredData = function (userId) {
        //this.router.navigate([userId]);
        this.post.setFilterId(userId);
        //this.jan1=this.post.getPosts();
    };
    Jan1Component = __decorate([
        core_1.Component({
            selector: 'jan1',
            template: "\n  <button type=\"button\" (click)=\"showFilterOptions()\">Filter</button>\n  <div *ngIf=\"showFilterOption\">\n  <label>Enter User id:</label>\n  <input type=\"text\" #userId/>\n   <a [routerLink]=\"[userId.value]\"><input type=\"button\" (click)=\"displayFilteredData(userId.value)\" value=\"Display Filtered Posts\"/></a>\n  </div>\n\n  <div>\n  <ul>\n    <li *ngFor='let details of jan1'>\n      <h2>{{details.title}}</h2>\n      <p>{{details.body}}</p>\n    </li>\n  </ul>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [posts_services_1.PostService, router_1.Router, router_2.ActivatedRoute])
    ], Jan1Component);
    return Jan1Component;
}());
exports.Jan1Component = Jan1Component;
//# sourceMappingURL=jan1.component.js.map