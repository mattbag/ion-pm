webpackJsonp([5],{

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerPageModule", function() { return ManagerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manager__ = __webpack_require__(410);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ManagerPageModule = (function () {
    function ManagerPageModule() {
    }
    return ManagerPageModule;
}());
ManagerPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__manager__["a" /* ManagerPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__manager__["a" /* ManagerPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__manager__["a" /* ManagerPage */]
        ]
    })
], ManagerPageModule);

//# sourceMappingURL=manager.module.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_database_database__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(135);
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
 * Generated class for the ManagerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ManagerPage = (function () {
    function ManagerPage(navCtrl, modal, navParams, _db) {
        this.navCtrl = navCtrl;
        this.modal = modal;
        this.navParams = navParams;
        this._db = _db;
    }
    ManagerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ManagerPage');
        this.sections = this._db.getSectionList();
        this.tasks = this._db.getTaskList();
        this.users = this._db.getUsers();
    };
    ManagerPage.prototype.create = function () {
        var newTaskModal = this.modal.create('CreateTaskPage');
        newTaskModal.present();
    };
    ManagerPage.prototype.removeSection = function (s) {
        console.log(s);
    };
    ManagerPage.prototype.editSection = function (s) {
        console.log(s);
    };
    ManagerPage.prototype.removeTask = function (t) {
        console.log(t);
    };
    ManagerPage.prototype.editTask = function (t) {
        console.log(t);
    };
    return ManagerPage;
}());
ManagerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-manager',template:/*ion-inline-start:"/Users/matteo/Desktop/dev-atlas/atlasgo/src/pages/manager/manager.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Manager</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-grid>\n  <h2><ion-icon color="secondary" name="md-add-circle" (click)="create()"></ion-icon>  Sections</h2>\n\n    <ion-row *ngFor="let s of sections | async">\n      <ion-col col-auto>\n        <ion-icon (click)="editSection(s)" name="build" color="primary"></ion-icon>\n        <ion-icon (click)="removeSection(s)" name="trash" color="danger"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <h3> {{s.label}}</h3>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <hr>\n  <ion-grid>\n  <h2><ion-icon color="secondary" name="md-add-circle" (click)="create()"></ion-icon>  Tasks</h2>\n    <ion-row *ngFor="let t of tasks | async">\n      <ion-col col-auto>\n        <ion-icon (click)="editTask(t)" name="build" color="primary"></ion-icon>\n        <ion-icon (click)="removeTask(t)" name="trash" color="danger"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <h3> {{t.label}}</h3>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <hr>\n  <ion-grid>\n  <h2><ion-icon color="secondary" name="md-add-circle" (click)="create()"></ion-icon>  Users</h2>\n    <ion-row *ngFor="let u of users | async">\n      <ion-col col-auto>\n        <ion-icon (click)="editTask(u)" name="build" color="primary"></ion-icon>\n        <ion-icon (click)="removeTask(u)" name="trash" color="danger"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <h3> {{u.name}} - <a href="{{\'mailto:\' + u.email}}">{{u.email}}</a></h3>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/matteo/Desktop/dev-atlas/atlasgo/src/pages/manager/manager.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__providers_database_database__["a" /* Database */]])
], ManagerPage);

//# sourceMappingURL=manager.js.map

/***/ })

});
//# sourceMappingURL=5.js.map