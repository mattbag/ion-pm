webpackJsonp([0],{

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModule", function() { return ProjectModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_progress_ionic_progress_ionic__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_progress_progress__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__project__ = __webpack_require__(414);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProjectModule = (function () {
    function ProjectModule() {
    }
    return ProjectModule;
}());
ProjectModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__project__["a" /* Project */],
            __WEBPACK_IMPORTED_MODULE_1__components_progress_progress__["a" /* Progress */],
            __WEBPACK_IMPORTED_MODULE_0__components_progress_ionic_progress_ionic__["a" /* ProgressIonic */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__project__["a" /* Project */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__project__["a" /* Project */]
        ]
    })
], ProjectModule);

//# sourceMappingURL=project.module.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressIonic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the ProgressIonic component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var ProgressIonic = (function () {
    // text: string;
    function ProgressIonic() {
        // console.log('Hello ProgressIonic Component');
        // this.text = 'Hello World';
    }
    return ProgressIonic;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('progress'),
    __metadata("design:type", Object)
], ProgressIonic.prototype, "progress", void 0);
ProgressIonic = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'progress-ionic',template:/*ion-inline-start:"/Users/matteo/Desktop/dev-atlas/atlasgo/src/components/progress-ionic/progress-ionic.html"*/'<div class="progress-outer">\n    <div class="progress-inner" [style.width]="progress + \'%\'">\n        {{progress}}%\n    </div>\n</div>'/*ion-inline-end:"/Users/matteo/Desktop/dev-atlas/atlasgo/src/components/progress-ionic/progress-ionic.html"*/
    }),
    __metadata("design:paramtypes", [])
], ProgressIonic);

//# sourceMappingURL=progress-ionic.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Progress; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the Progress component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var Progress = (function () {
    function Progress() {
        // console.log('Hello Progress Component');
        // console.log(progress);
    }
    return Progress;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('progress'),
    __metadata("design:type", Object)
], Progress.prototype, "progress", void 0);
Progress = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'progress-bar',template:/*ion-inline-start:"/Users/matteo/Desktop/dev-atlas/atlasgo/src/components/progress/progress.html"*/'<!--<div class="progress-outer">\n    <div class="progress-inner" [style.width]="progress + \'%\'">\n        {{progress}}%\n    </div>\n</div>-->\n<hr style="margin-bottom:0">\n        <hr progress [style.width]="progress + \'%\'" style="margin-top:0">  \n         <!--{{progress}}-->'/*ion-inline-end:"/Users/matteo/Desktop/dev-atlas/atlasgo/src/components/progress/progress.html"*/
    }),
    __metadata("design:paramtypes", [])
], Progress);

//# sourceMappingURL=progress.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
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



// import { DecimalPipe } from '@angular/common';
/**
 * Generated class for the Project page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Project = (function () {
    function Project(navCtrl, alertCtrl, navParams, modal, _db) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this._db = _db;
        this.user = 'Admin';
    }
    Project.prototype.ionViewDidLoad = function () {
        var _this = this;
        // console.log('add project details (platform?) todo');
        // console.log('progress todo');
        // console.log('manager edit todo');
        // console.log('task note todo');
        // console.log('manager users > make tabs todo ?');
        // console.log(this.project);
        this.project_id = this.navParams.get('id');
        // console.log(this.project_id);
        this.project = this._db.getProject(this.project_id);
        // console.log(this.project);
        // this.sections = this._db.getSections(this.project_id);
        this.sections = this._db.getSections(this.project_id).map(function (section) {
            // console.log(section);
            var all_tasks = 0;
            var all_tasks_done = 0;
            // let project_progress: number = 0;
            return section.map(function (section_obj) {
                // console.log(section_obj);
                section_obj.tasks = _this._db.getTasks(_this.project_id, section_obj.id);
                section_obj.tasks.subscribe(function (resp) {
                    // console.log(resp);
                    all_tasks += resp.length;
                    var section_progress = resp.filter(function (task) {
                        // console.log(task);
                        if (task.checked) {
                            all_tasks_done++;
                            return true;
                        }
                        // return task.checked
                    });
                    // console.log(all_tasks);
                    //  project_progress = 100 / all_tasks * all_tasks_done;
                    // this._db.getProject(this.project_id).update({progress : this.project_progress });
                    //  this.project.progress = this.project_progress;
                    section_obj.progress = 100 / resp.length * section_progress.length;
                    // console.log(project_progress);
                });
                return section_obj;
            });
        });
    };
    Project.prototype.showInfo = function (task) {
        var taskModal = this.modal.create('TaskModal', { item: task });
        taskModal.present();
    };
    Project.prototype.manageTask = function (task, section_key, section) {
        // console.log(section);
        var _this = this;
        // let activeTask: FirebaseObjectObservable<any[]> = task;
        // console.log(activeTask);
        var alert = this.alertCtrl.create({
            title: 'Task Status',
            inputs: [
                {
                    type: 'radio',
                    label: 'Yes',
                    value: 'yes',
                    checked: task.checked
                },
                {
                    type: 'radio',
                    label: 'No',
                    value: 'no',
                    checked: !task.checked
                },
                {
                    type: 'radio',
                    label: 'N/A',
                    value: 'na'
                }
            ]
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Confirm',
            handler: function (data) {
                // console.log(data);
                if (data === 'yes' && !task.checked) {
                    task.checked = true;
                    _this.toggleTask(_this.project_id, section_key, section, task.checked);
                }
                else if (data === 'no' && task.checked) {
                    task.checked = false;
                    _this.toggleTask(_this.project_id, section_key, section, task.checked);
                }
                else if (data === 'na') {
                    console.log('not applicable');
                }
                else {
                    console.log('same check');
                }
            }
        });
        alert.present();
    };
    Project.prototype.notify = function (admin) {
        console.log('notification to ' + admin);
    };
    Project.prototype.toggleTask = function (id, key, section, value) {
        this._db.checkTask(id, key, section, value);
    };
    return Project;
}());
Project = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-project',template:/*ion-inline-start:"/Users/matteo/Desktop/dev-atlas/atlasgo/src/pages/project/project.html"*/'<ion-header>\n  <ion-navbar color="primary">\n\n    <ion-toolbar>\n      <ion-title>{{(project | async)?.name}} 😁</ion-title>\n      <ion-buttons end>\n        <ion-chip color="accent">\n          <ion-label>{{(project | async)?.launch | date :\'yMMMMd\'}}</ion-label>\n          <ion-icon name="calendar" color="danger"></ion-icon>\n        </ion-chip>\n      </ion-buttons>\n    </ion-toolbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <!-- {{project_progress | number: \'1.0-0\'}} -->\n  <!--{{(project | async) | json}}-->\n  <!-- <progress-ionic [progress]="project_progress"></progress-ionic> -->\n  <br>\n<!-- {{(sections | async)?.length}} -->\n  <ion-grid>\n    <ion-row>\n\n      <ion-col col-12 col-lg-6 col-xl-4 *ngFor="let section of sections | async">\n        <ion-card>\n          <ion-card-header>\n            <ion-row align-items-center>\n              <ion-col>\n                  <ion-icon name="{{section.icon}}" class="section-icon"></ion-icon> {{section.label}}\n              </ion-col>\n              <ion-col col-auto text-right>\n                <ion-chip (click)="notify(section.admin)" [color]="section.admin === user ? \'accent\' : \'\'">\n                  <ion-label>{{section.admin | titlecase}}</ion-label>\n                  <ion-avatar>\n                    <img src="http://fillmurray.com/100/100">\n                  </ion-avatar>\n                </ion-chip>\n              </ion-col>\n            </ion-row>\n          </ion-card-header>\n          <ion-card-content>\n            <progress-bar [progress]="section?.progress"></progress-bar>\n\n            <!--{{(section?.tasks | async) | json}}-->\n            <ion-list *ngIf="section?.tasks">\n\n              <ion-item *ngFor="let task of section.tasks | async" class="task-item">\n\n                <span (click)="showInfo(task)">{{task.label}}</span>\n                <button ion-button icon-only clear item-right (click)="showInfo(task)">\n                <ion-icon name="attach" color="danger"></ion-icon>\n              </button>\n\n                <button ion-button icon-only item-left clear (click)="manageTask(task, task.$key, section)">\n                <ion-icon name="thumbs-down" *ngIf="!task.checked"></ion-icon>\n                <ion-icon name="happy" *ngIf="task.checked"></ion-icon>\n                <!--<ion-icon name="hand" *ngIf="!task.done"></ion-icon>-->\n              </button>\n\n              </ion-item>\n\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n\n\n        <br>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/matteo/Desktop/dev-atlas/atlasgo/src/pages/project/project.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_database_database__["a" /* Database */]])
], Project);

//# sourceMappingURL=project.js.map

/***/ })

});
//# sourceMappingURL=0.js.map