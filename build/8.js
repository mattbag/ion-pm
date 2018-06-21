webpackJsonp([8],{

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProjectPageModule", function() { return CreateProjectPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_project__ = __webpack_require__(407);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateProjectPageModule = (function () {
    function CreateProjectPageModule() {
    }
    return CreateProjectPageModule;
}());
CreateProjectPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__create_project__["a" /* CreateProjectPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_project__["a" /* CreateProjectPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__create_project__["a" /* CreateProjectPage */]
        ]
    })
], CreateProjectPageModule);

//# sourceMappingURL=create-project.module.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateProjectPage; });
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
 * Generated class for the CreateProjectPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CreateProjectPage = (function () {
    function CreateProjectPage(viewCtrl, navParams, _db) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this._db = _db;
        this.project_date = new Date().toISOString();
        this.section_list = this._db.getSectionList();
    }
    ;
    CreateProjectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateProjectPage');
    };
    CreateProjectPage.prototype.addProject = function () {
        this.project_data = {
            "id": this.project_name.toLowerCase().split(' ').join('').toString(),
            "name": this.project_name,
            "launch": this.project_date,
            // "sections": this.project_sections,
            "progress": 0
        };
        // console.log(this.project_sections);
        this._db.addProject(this.project_data, this.project_sections);
        this.dismiss();
        //  this.nav.push('Project', { id: project[0].$key });
    };
    CreateProjectPage.prototype.dismiss = function () {
        //  let data = { 'foo': 'bar' };
        this.viewCtrl.dismiss();
    };
    return CreateProjectPage;
}());
CreateProjectPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-create-project',template:/*ion-inline-start:"/Users/matteo/Desktop/dev-atlas/atlasgo/src/pages/create-project/create-project.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Create Project</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only clear (click)="dismiss()">\n      <ion-icon name="close"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label color="primary" floating>Project Name</ion-label>\n      <ion-input [(ngModel)]="project_name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" floating>Launch Date</ion-label>\n        <!--<ion-input [(ngModel)]="project_date"></ion-input>-->\n        <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="project_date"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" floating>Sections</ion-label>\n      <ion-select [(ngModel)]="project_sections" multiple="true">\n        <ion-option [value]="section.$key" *ngFor="let section of section_list | async">{{section.label}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item></ion-item>\n  </ion-list>\n\n  <button ion-button full (click)="addProject()" [disabled]="!project_sections || !project_name">Create</button>\n</ion-content>\n'/*ion-inline-end:"/Users/matteo/Desktop/dev-atlas/atlasgo/src/pages/create-project/create-project.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__providers_database_database__["a" /* Database */]])
], CreateProjectPage);

//# sourceMappingURL=create-project.js.map

/***/ })

});
//# sourceMappingURL=8.js.map