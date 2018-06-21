webpackJsonp([9],{

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category__ = __webpack_require__(406);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CategoryModule = (function () {
    function CategoryModule() {
    }
    return CategoryModule;
}());
CategoryModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__category__["a" /* Category */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__category__["a" /* Category */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__category__["a" /* Category */]
        ]
    })
], CategoryModule);

//# sourceMappingURL=category.module.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
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
 * Generated class for the Category page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Category = (function () {
    function Category(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //  dummy repeater
        // this.repeater = Array(5).fill().map((x,i)=>i); // [0,1,2,3,4]
        this.repeater = Array(5).fill(4); // [4,4,4,4,4]
    }
    Category.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad Category');
    };
    return Category;
}());
Category = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-category',template:/*ion-inline-start:"/Users/matteo/Desktop/dev-atlas/atlasgo/src/pages/category/category.html"*/'<ion-content padding>\n  \n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <p>Breadcrumbs</p>\n<h2>Category Name</h2>\n      </ion-col>\n      <ion-col col-lg-4>\n         <ion-item>\n                <ion-label>Sort</ion-label>\n                <ion-select>\n                    <ion-option value="f" selected="true">Business</ion-option>\n                    <ion-option value="m">Sales</ion-option>\n                </ion-select>\n            </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n\n      <ion-col col-12 col-lg-4 col-xl-3 *ngFor="let number of repeater">\n        <ion-card>\n          <ion-card-header>\n            Header {{number}}\n          </ion-card-header>\n          <ion-card-content>\n            The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n            <br> <br> <br>\n            <hr>\n            <ion-list no-lines>\n              <button ion-item>\n                <ion-icon name="leaf" item-left></ion-icon>\n                Herbology\n              </button>\n              <button ion-item>\n                <ion-icon name="beer" item-left></ion-icon>\n                Beers\n              </button>\n              <button ion-item>\n                <ion-icon name="logo-github" item-left></ion-icon>\n                Github\n              </button>\n            </ion-list>\n\n          </ion-card-content>\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/matteo/Desktop/dev-atlas/atlasgo/src/pages/category/category.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], Category);

//# sourceMappingURL=category.js.map

/***/ })

});
//# sourceMappingURL=9.js.map