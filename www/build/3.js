webpackJsonp([3],{

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsModule", function() { return SearchResultsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_results__ = __webpack_require__(415);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { MasonryModule } from 'angular2-masonry';
var SearchResultsModule = (function () {
    function SearchResultsModule() {
    }
    return SearchResultsModule;
}());
SearchResultsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__search_results__["a" /* SearchResults */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_results__["a" /* SearchResults */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__search_results__["a" /* SearchResults */]
        ]
    })
], SearchResultsModule);

//# sourceMappingURL=search-results.module.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResults; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SearchResults page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SearchResults = (function () {
    function SearchResults(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.searchResultsArray = [{
                title: 'Title 1',
                excerpt: 'lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum <br> lorem ipsum lorem ipsum ',
                hasBtns: true
            }, {
                title: '',
                excerpt: 'lorem ipsum',
                hasBtns: false
            }, {
                title: 'Title 3',
                excerpt: '',
                hasBtns: true
            }, {
                title: 'Title 4',
                excerpt: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
                hasBtns: true
            }, {
                title: 'Title 1',
                excerpt: 'lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
                hasBtns: false
            }, {
                title: '',
                excerpt: 'lorem ipsum',
                hasBtns: true
            }, {
                title: 'Title 3',
                excerpt: '',
                hasBtns: true
            }, {
                title: 'Title 4',
                excerpt: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
                hasBtns: false
            }];
    }
    SearchResults.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad SearchResults');
    };
    SearchResults.prototype.openPage = function (page) {
        console.log(page);
    };
    SearchResults.prototype.clickCheck = function (event) {
        event.stopPropagation();
        console.log('wee');
    };
    return SearchResults;
}());
SearchResults = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search-results',template:/*ion-inline-start:"/Users/matteo/Desktop/dev-atlas/atlasgo/src/pages/search-results/search-results.html"*/'<ion-content padding>\n\n<masonry [options]="{ gutter: 0, transitionDuration: \'0.3s\',\npercentPosition: true,\ncolumnWidth: \'.brick\'\n  }">\n       <masonry-brick class="brick" *ngFor="let card of searchResultsArray">\n         \n           <ion-card (click)="openPage($event)">\n          <ion-card-header *ngIf="card.title">\n           {{card?.title}}\n          </ion-card-header>\n          <ion-card-content  *ngIf="card.excerpt">\n           {{card?.excerpt}}\n           <div *ngIf="card?.hasBtns">\n            <br> <br> <br>\n            <hr>\n            <ion-list no-lines>\n              <button ion-item (click)="clickCheck($event)">\n                <ion-icon name="leaf" item-left></ion-icon>\n                Herbology\n              </button>\n              <button ion-item>\n                <ion-icon name="beer" item-left></ion-icon>\n                Beers\n              </button>\n              <button ion-item>\n                <ion-icon name="logo-github" item-left></ion-icon>\n                Github\n              </button>\n            </ion-list>\n            </div>\n          </ion-card-content>\n        </ion-card>\n         </masonry-brick>\n</masonry>\n<!--<div class="brick__wrap">\n\n\n <div class="brick" *ngFor="let card of searchResultsArray">\n           <ion-card (click)="openPage($event)">\n          <ion-card-header *ngIf="card.title">\n           {{card?.title}}\n          </ion-card-header>\n          <ion-card-content  *ngIf="card.excerpt">\n           {{card?.excerpt}}\n           <div *ngIf="card?.hasBtns">\n            <br> <br> <br>\n            <hr>\n            <ion-list no-lines>\n              <button ion-item (click)="clickCheck($event)">\n                <ion-icon name="leaf" item-left></ion-icon>\n                Herbology\n              </button>\n              <button ion-item>\n                <ion-icon name="beer" item-left></ion-icon>\n                Beers\n              </button>\n              <button ion-item>\n                <ion-icon name="logo-github" item-left></ion-icon>\n                Github\n              </button>\n            </ion-list>\n            </div>\n          </ion-card-content>\n        </ion-card>\n         </div>\n</div>-->\n</ion-content>'/*ion-inline-end:"/Users/matteo/Desktop/dev-atlas/atlasgo/src/pages/search-results/search-results.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], SearchResults);

//# sourceMappingURL=search-results.js.map

/***/ })

});
//# sourceMappingURL=3.js.map