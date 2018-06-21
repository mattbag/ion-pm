webpackJsonp([2],{

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModalModule", function() { return TaskModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_modal__ = __webpack_require__(416);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TaskModalModule = (function () {
    function TaskModalModule() {
    }
    return TaskModalModule;
}());
TaskModalModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__task_modal__["a" /* TaskModal */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__task_modal__["a" /* TaskModal */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__task_modal__["a" /* TaskModal */]
        ]
    })
], TaskModalModule);

//# sourceMappingURL=task-modal.module.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskModal; });
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
 * Generated class for the TaskModal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TaskModal = (function () {
    function TaskModal(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        // console.log('task', navParams.get('item'));
        this.modalTask = navParams.get('item');
        console.log(this.modalTask);
    }
    TaskModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return TaskModal;
}());
TaskModal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-task-modal',template:/*ion-inline-start:"/Users/matteo/Desktop/dev-atlas/atlasgo/src/pages/task-modal/task-modal.html"*/'<ion-header>\n  <ion-navbar color="accent">\n    <ion-title>{{modalTask.label}}</ion-title>\n  </ion-navbar>\n  <button ion-button clear (click)="dismiss()">\n <ion-icon name="ios-arrow-back"></ion-icon>\n</button>\n</ion-header>\n\n<ion-content padding>\n   <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-header>\n            <b>Notes:</b>\n          </ion-card-header>\n          <ion-card-content>\n              {{modalTask.notes}}\n          </ion-card-content>\n        </ion-card>\n      </ion-col> \n    </ion-row>\n\n    <ion-row>\n      <ion-col *ngFor="let info of modalTask.info" col-md-6>\n        <ion-card>\n          <ion-card-content>\n              {{info.text}}\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n \n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/matteo/Desktop/dev-atlas/atlasgo/src/pages/task-modal/task-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
], TaskModal);

//# sourceMappingURL=task-modal.js.map

/***/ })

});
//# sourceMappingURL=2.js.map