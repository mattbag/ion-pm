webpackJsonp([7],{

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTaskPageModule", function() { return CreateTaskPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_task__ = __webpack_require__(408);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateTaskPageModule = (function () {
    function CreateTaskPageModule() {
    }
    return CreateTaskPageModule;
}());
CreateTaskPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__create_task__["a" /* CreateTaskPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_task__["a" /* CreateTaskPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__create_task__["a" /* CreateTaskPage */]
        ]
    })
], CreateTaskPageModule);

//# sourceMappingURL=create-task.module.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTaskPage; });
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



var CreateTaskPage = (function () {
    function CreateTaskPage(viewCtrl, navParams, _db) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this._db = _db;
        this.info_amount = 0;
        this.info_array = [];
        this.user_name = '';
        this.user_email = '@atlasagency.com.au';
        this.type = "section";
        this.section_list = this._db.getSectionList();
        this.users = this._db.getUsers();
        //  this.user_email = this.user_name + '@atlasagency.com.au';
    }
    CreateTaskPage.prototype.updateEmail = function () {
        // console.log('ionViewDidLoad CreateTaskPage');
        this.user_email = this.user_name + '@atlasagency.com.au';
    };
    CreateTaskPage.prototype.dismiss = function () {
        //  let data = { 'foo': 'bar' };
        this.viewCtrl.dismiss();
    };
    CreateTaskPage.prototype.addSection = function () {
        this.section_data = {
            "id": this.section_name.toLowerCase().split(' ').join('').toString(),
            "label": this.section_name,
            "admin": this.section_admin,
            "icon": this.section_icon,
            "progress": 0
        };
        console.log(this.section_data);
        this._db.addSection(this.section_data);
        this.viewCtrl.dismiss();
        // setTimeout(() => { this.viewCtrl.dismiss() }, 500)
    };
    CreateTaskPage.prototype.addTask = function () {
        this.task_data = {
            "id": this.task_name.toLowerCase().split(' ').join('').toString(),
            "label": this.task_name,
            "section": this.task_section,
            "checked": false,
            "info": this.info_array
        };
        // console.log(this.task_data);
        this._db.addTask(this.task_data);
        this.viewCtrl.dismiss();
        // setTimeout(() => { this.viewCtrl.dismiss() }, 500)
    };
    CreateTaskPage.prototype.addTaskInfo = function () {
        this.info_amount++;
        this.info_array.push({ id: this.info_amount, text: '' });
        // console.log(this.info_amount);
        console.log(this.info_array);
    };
    CreateTaskPage.prototype.removeInfo = function (key) {
        var index = this.info_array.indexOf(key);
        //  console.log(index);
        this.info_array.splice(index, 1);
        //  console.log(this.info_array);
    };
    CreateTaskPage.prototype.addUser = function () {
        this.user_data = {
            "name": this.user_name,
            "email": this.user_email
        };
        // console.log(this.user_data);
        this._db.addUser(this.user_data);
        this.viewCtrl.dismiss();
        // setTimeout(() => { this.viewCtrl.dismiss() }, 500)
    };
    return CreateTaskPage;
}());
CreateTaskPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-create-task',template:/*ion-inline-start:"/Users/matteo/Desktop/dev-atlas/atlasgo/src/pages/create-task/create-task.html"*/'<!--<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Create Project</ion-title>\n    \n     <ion-buttons end>\n      <button ion-button icon-only clear (click)="dismiss()">\n      <ion-icon name="close"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>-->\n<ion-header color="accent">\n\n  <ion-toolbar>\n    <!--<ion-title>Create Project</ion-title>-->\n\n    <ion-buttons end>\n      <button ion-button icon-only clear (click)="dismiss()">\n      <ion-icon name="close"></ion-icon>\n    </button>\n    </ion-buttons>\n    <ion-segment [(ngModel)]="type" color="primary">\n      <ion-segment-button value="section">\n        section\n        <!--<ion-icon name="camera"></ion-icon>-->\n      </ion-segment-button>\n      <ion-segment-button value="task">\n        task\n        <!--<ion-icon name="bookmark"></ion-icon>-->\n      </ion-segment-button>\n      <ion-segment-button value="user">\n        user\n        <!--<ion-icon name="bookmark"></ion-icon>-->\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <div [ngSwitch]="type">\n    <ion-grid>\n      <ion-row jc>\n      <ion-col col-auto>\n        <ion-icon color="primary" [name]="section_icon" *ngSwitchCase="\'section\'" style="font-size:50px"></ion-icon>\n      </ion-col>\n    </ion-row>\n    </ion-grid>\n    <ion-list *ngSwitchCase="\'section\'">\n      <ion-item>\n        <ion-label color="primary" floating>Section Name</ion-label>\n        <ion-input [(ngModel)]="section_name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" floating>Admin</ion-label>\n        <!--<ion-input [(ngModel)]="section_admin"></ion-input>-->\n        <ion-select [(ngModel)]="section_admin">\n          <ion-option [value]="user.name" *ngFor="let user of users | async">{{user.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" floating>Icon</ion-label>\n        <ion-select [(ngModel)]="section_icon">\n          <!--<ion-option [value]="icon.$value" *ngFor="let icon of icons | async">{{user.$value}}</ion-option>-->\n          <ion-option value="speedometer">Speedometer</ion-option>\n          <ion-option value="glasses">Glasses</ion-option>\n          <ion-option value="logo-google">Google</ion-option>\n          <ion-option value="settings">Settings</ion-option>\n          <ion-option value="book">Book</ion-option>\n          <ion-option value="nuclear">Nuclear</ion-option>\n          <ion-option value="ionic">Atom</ion-option>\n          <ion-option value="ionitron">Bot</ion-option>\n           <ion-option value="alarm">Alarm</ion-option>\n            <ion-option value="analytics">Analytics</ion-option>\n             <ion-option value="logo-instagram">Instagram</ion-option>\n           <ion-option value="contact">Contact</ion-option>\n            <ion-option value="brush">Brush</ion-option>\n             <ion-option value="umbrella">Umbrella</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <button ion-button full (click)="addSection()" *ngSwitchCase="\'section\'" [disabled]="!section_name || !section_admin">Add Section</button>\n    \n\n    <ion-list *ngSwitchCase="\'task\'">\n      <ion-item>\n        <ion-label color="primary" floating>Task Name</ion-label>\n        <ion-input [(ngModel)]="task_name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" floating>Section</ion-label>\n        <ion-select [(ngModel)]="task_section">\n          <ion-option [value]="section.$key" *ngFor="let section of section_list | async">{{section.label}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n      <ion-item *ngFor="let key of info_array">\n         <ion-icon name="trash" color="danger" item-right (click)="removeInfo(key)"></ion-icon>\n        <ion-label color="primary" floating>Task Info {{key.id}}</ion-label>\n        <ion-input [(ngModel)]="info_array[info_array.indexOf(key)].text"></ion-input>\n       \n      </ion-item>\n      <ion-item>\n         <button ion-button clear (click)="addTaskInfo()"><ion-icon name="add"></ion-icon> Add Task Info</button>\n        </ion-item>\n    </ion-list>\n    <button ion-button full (click)="addTask()" *ngSwitchCase="\'task\'" [disabled]="!task_name || !task_section">Add Task</button>\n\n    <ion-list *ngSwitchCase="\'user\'">\n      <ion-item>\n        <ion-label color="primary" floating>User Name</ion-label>\n        <ion-input [(ngModel)]="user_name"(input)="updateEmail()"></ion-input>\n      </ion-item>\n    <ion-item>\n        <ion-label color="primary" floating>User Email</ion-label>\n        <ion-input [(ngModel)]="user_email" type="email" [readonly]="!user_name"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button full (click)="addUser()" *ngSwitchCase="\'user\'" [disabled]="!user_name || !user_email">Add User</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/matteo/Desktop/dev-atlas/atlasgo/src/pages/create-task/create-task.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__providers_database_database__["a" /* Database */]])
], CreateTaskPage);

//# sourceMappingURL=create-task.js.map

/***/ })

});
//# sourceMappingURL=7.js.map