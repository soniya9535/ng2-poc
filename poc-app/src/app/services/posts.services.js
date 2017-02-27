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
var http_1 = require('@angular/http');
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
require('rxjs/add/operator/map');
var PostService = (function () {
    function PostService(http) {
        this.http = http;
        this.baseUrl = 'https://jsonplaceholder.typicode.com/posts';
        this.dataStore = { posts: [] };
        this._posts = new BehaviorSubject_1.BehaviorSubject([]);
        this.posts = this._posts.asObservable();
        this.loadAll();
    }
    PostService.prototype.ngOnInit = function () {
    };
    PostService.prototype.loadAll = function () {
        var _this = this;
        this.http.get("" + this.baseUrl).map(function (response) { return response.json(); }).subscribe(function (data) {
            //console.log(this.test);
            _this.dataStore.posts = data;
            _this._posts.next(Object.assign({}, _this.dataStore).posts);
        }, function (error) { return console.log('Could not load todos.'); });
    };
    PostService.prototype.setFilterId = function (userId) {
        this.id = userId;
        return this.getFilterId();
    };
    PostService.prototype.getFilterId = function () {
        return this.id;
    };
    PostService.prototype.getPosts = function () {
        var _this = this;
        this.posts.subscribe(function (res) {
            _this.filteredData = [];
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var data = res_1[_i];
                if (data.userId == _this.getFilterId()) {
                    _this.filteredData.push(data);
                }
            }
            //console.log(this.filteredData);
        });
        return this.filteredData;
    };
    PostService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;
//# sourceMappingURL=posts.services.js.map