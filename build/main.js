webpackJsonp([10],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Database; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Http } from '@angular/http';

var Database = (function () {
    function Database(af) {
        this.af = af;
        // console.log('Hello Database Provider');
    }
    Database.prototype.createProject = function (project) {
        var db = this.af.list('/projects');
        db.push(project);
    };
    Database.prototype.getProjects = function () {
        return this.af.list('/projects', {
            query: {
                orderByKey: true
            }
        });
    };
    Database.prototype.getFirstProject = function () {
        return this.af.list('/projects', {
            query: {
                limitToFisrt: 1,
                orderByKey: true
            }
        });
    };
    Database.prototype.getProject = function (project_id) {
        return this.af.object('/projects/' + project_id);
    };
    Database.prototype.getSections = function (project_id) {
        return this.af.list('/sections/' + project_id);
    };
    Database.prototype.getSectionList = function () {
        return this.af.list('/section_list');
    };
    Database.prototype.addSection = function (section) {
        console.log(section);
        this.af.object('/section_list/' + section.id).set(section);
        // .then(section=>{
        //   console.log('stick this somewhere '+section.key);
        //   // this.af.object('/section_list/'+ section.key).update(section)
        // });
    };
    Database.prototype.getTaskList = function () {
        return this.af.list('/task_list');
    };
    Database.prototype.addTask = function (section) {
        this.af.list('/task_list').push(section);
    };
    // getTasks(project_id, section_name) {
    //   // console.log(`/tasks/${project_id}/${section_name}`);
    //   return this.af.object(`/tasks/${project_id}/${section_name}`);
    // }
    Database.prototype.getTasks = function (project_id, section_key) {
        //  console.log('cannot use key so using an id '+section_key);
        // console.log(`/tasks/${project_id}/${section_name}`);
        return this.af.list("/tasks/" + project_id + "/" + section_key);
    };
    Database.prototype.checkTask = function (project_id, some_index, section, value) {
        // console.log(`/tasks/${project_id}/${section.id}/${some_index}`);
        // console.log(some_index);
        this.af.object("/tasks/" + project_id + "/" + section.id + "/" + some_index).update({ checked: value });
        // console.log('donzo');
    };
    // tester(section_name){
    //   // console.log(section_name);
    //   return this.af.list('/tasks/performance/');
    // }
    Database.prototype.getUsers = function () {
        return this.af.list('/users');
    };
    Database.prototype.addUser = function (user) {
        this.af.list('/users').push(user);
    };
    Database.prototype.addProject = function (project, project_sections) {
        var _this = this;
        // console.log(project_sections);
        var section_assigned = [];
        this.af.list('/projects').push(project)
            .then(function (project) {
            // console.log("project key " + project.key);
            _this.getSectionList().subscribe(function (sub) {
                // console.log(sub);
                project_sections.forEach(function (section_key) {
                    // section.map( item =>{
                    // console.log('proj key '+project.key);
                    _this.attachTasks(section_key, project.key);
                    //   // item => item.name.toLowerCase().indexOf(project_sections.toLowerCase()) > -1
                    // })
                    sub.map(function (item) {
                        // console.log("section from db key " + section_key);
                        // console.log("item key " + item.$key);
                        if (item.$key === section_key) {
                            // console.log('same');
                            section_assigned.push(item);
                            // return true
                        }
                        else {
                            // console.log('not same');
                        }
                    });
                    // console.log(section_assigned);
                    _this.af.object('/sections/' + project.key).set(section_assigned);
                });
            });
        });
    }; // end add project
    Database.prototype.attachTasks = function (section_key, project_key) {
        var _this = this;
        var tasks_assigned = [];
        this.getTaskList().subscribe(function (resp) {
            // console.log('section key ' + section_key);
            resp.map(function (task) {
                // console.log(item.section);
                if (task.section === section_key) {
                    // console.log('same');
                    tasks_assigned.push(task);
                    // return true
                }
                else {
                    // console.log('not same');
                }
            });
            console.log(tasks_assigned);
            _this.af.object('/tasks/' + project_key + '/' + section_key).set(tasks_assigned);
        });
    };
    return Database;
}());
Database = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */]])
], Database);

// get the sections of the project
// get the keys of the sections
// get the tasks related to the section from task_list 
//# sourceMappingURL=database.js.map

/***/ }),

/***/ 144:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 144;

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/category/category.module": [
		396,
		9
	],
	"../pages/create-project/create-project.module": [
		397,
		8
	],
	"../pages/create-task/create-task.module": [
		398,
		7
	],
	"../pages/home/home.module": [
		399,
		6
	],
	"../pages/manager/manager.module": [
		400,
		5
	],
	"../pages/popover/popover.module": [
		401,
		4
	],
	"../pages/project/project.module": [
		402,
		0
	],
	"../pages/search-results/search-results.module": [
		403,
		3
	],
	"../pages/task-modal/task-modal.module": [
		404,
		2
	],
	"../pages/video-modal/video-modal.module": [
		405,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 185;

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(284);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_database_database__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';




var firebaseConfig = {
    apiKey: "AIzaSyAj3HXzt1kpV2YlFi4fIHSRmFM77oKuYEg",
    authDomain: "atlasgo-caa32.firebaseapp.com",
    databaseURL: "https://atlasgo-caa32.firebaseio.com",
    projectId: "atlasgo-caa32",
    storageBucket: "atlasgo-caa32.appspot.com",
    messagingSenderId: "29854285269"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/category/category.module#CategoryModule', name: 'Category', segment: 'category', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-project/create-project.module#CreateProjectPageModule', name: 'CreateProjectPage', segment: 'create-project', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-task/create-task.module#CreateTaskPageModule', name: 'CreateTaskPage', segment: 'create-task', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomeModule', name: 'Home', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/manager/manager.module#ManagerPageModule', name: 'ManagerPage', segment: 'manager', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/popover/popover.module#PopoverModule', name: 'Popover', segment: 'popover', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/project/project.module#ProjectModule', name: 'Project', segment: 'project', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search-results/search-results.module#SearchResultsModule', name: 'SearchResults', segment: 'search-results', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/task-modal/task-modal.module#TaskModalModule', name: 'TaskModal', segment: 'task-modal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/video-modal/video-modal.module#VideoModalModule', name: 'VideoModal', segment: 'video-modal', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_7__providers_database_database__["a" /* Database */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menu, modal, _db) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.menu = menu;
        this.modal = modal;
        this._db = _db;
        this.rootPage = 'Home';
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Manager', component: 'ManagerPage', icon: 'ios-briefcase' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready()
            .then(function () {
            if (_this.platform.is('cordova')) {
                // make your native calls
                console.log('mobile');
                _this.statusBar.styleDefault();
                _this.splashScreen.hide();
            }
            else {
                // handle thing accordingly
                console.log('desktop');
            }
        }).then(function () {
            _this.projects = _this._db.getProjects();
            _this.firstProject = _this._db.getFirstProject();
            _this.firstProject.subscribe(function (project) {
                // console.log(project[0].$key);
                if (project[0])
                    _this.nav.setRoot('Project', { id: project[0].$key });
                else {
                    console.log('no project');
                    _this.newProject();
                }
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        // this.nav.setRoot(page.component);
        if (page.$key)
            this.nav.setRoot('Project', { id: page.$key });
        else
            this.nav.setRoot(page.component);
    };
    MyApp.prototype.newProject = function () {
        var newProjectModal = this.modal.create('CreateProjectPage');
        newProjectModal.present();
    };
    MyApp.prototype.create = function () {
        var newTaskModal = this.modal.create('CreateTaskPage');
        newTaskModal.present();
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/matteo/Desktop/dev-atlas/atlasgo/src/app/app.html"*/'<ion-split-pane when="md">\n  <!--  our side menu  -->\n  <ion-menu [content]="content">\n    <ion-content class="sidenav">\n\n      <div class="logo-wrap">\n        <img src="assets/img/logo.svg" alt="atlas logo" width="90%">\n        <img src="assets/img/logo-go.svg" alt="atlas logo go" width="50" class="logo-go">\n        <br><br>\n      </div>\n\n\n      <ion-list>\n\n        <button ion-item *ngFor="let project of projects | async" (click)="openPage(project)">\n                    <ion-icon name="md-arrow-dropright" item-left></ion-icon>\n                {{project.name}}\n                </button>\n\n      </ion-list>\n      <hr style="background-color: white">\n      <ion-list>\n\n        <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n                    <ion-icon [name]="p.icon" item-left></ion-icon>\n                {{p.title}}\n                </button>\n\n\n\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n\n  <ion-nav [root]="rootPage" main #content></ion-nav>\n\n  <ion-fab bottom right>\n    <button ion-fab> <ion-icon name="menu" color="accent"></ion-icon></button>\n    <ion-fab-list side="top">\n      <!--<button ion-fab (click)="changeProgress(44)" color="accent">44%</button>-->\n      <button ion-fab (click)="newProject()" color="accent"><ion-icon name="add"></ion-icon></button>\n      <button ion-fab (click)="create()" color="accent"> <ion-icon name="md-list-box"></ion-icon></button>\n      <button ion-fab color="accent">\n        <ion-chip>\n    <ion-avatar>\n      <img src="http://fillmurray.com/100/100">\n    </ion-avatar>\n     </ion-chip>\n    </button>\n    </ion-fab-list>\n    <ion-fab-list side="left">\n      <button ion-fab menuToggle color="secondary">\n      <ion-icon name="ios-albums" color="danger"></ion-icon>\n    </button>\n\n      <button ion-fab color="secondary">\n      <ion-icon name="color-palette"></ion-icon>\n    </button>\n\n    </ion-fab-list>\n  </ion-fab>\n</ion-split-pane>\n'/*ion-inline-end:"/Users/matteo/Desktop/dev-atlas/atlasgo/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* Database */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[267]);
//# sourceMappingURL=main.js.map