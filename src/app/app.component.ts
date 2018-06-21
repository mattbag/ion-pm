import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';

import { FirebaseListObservable } from 'angularfire2/database';
import { Database } from './../providers/database/database';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'Home';
  pages: Array<{ title: string, component: string, icon: string }>;
  projects: FirebaseListObservable<any>;
  firstProject: FirebaseListObservable<any>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public menu: MenuController,
    public modal: ModalController,
    public _db: Database) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Manager', component: 'ManagerPage', icon: 'ios-briefcase' },
      // { title: 'Category', component: 'Category', icon: 'leaf' },
      // { title: 'Search Results', component: 'SearchResults', icon: 'search' },
      //  { title: 'Orgs', component: OrgsPage },
      //  { title: 'Trends', component: TrendsPage },
      // { title: 'Users', component: UsersPage }
    ];

  }

  initializeApp() {
    this.platform.ready()
      .then(() => {
        if (this.platform.is('cordova')) {
          // make your native calls
          console.log('mobile');
          this.statusBar.styleDefault();
          this.splashScreen.hide();
        } else {
          // handle thing accordingly
          console.log('desktop');
        }
      }).then(()=>{
  this.projects = this._db.getProjects();

      this.firstProject = this._db.getFirstProject();

      this.firstProject.subscribe(project => {
        // console.log(project[0].$key);
        if (project[0])
          this.nav.setRoot('Project', { id: project[0].$key });
        else {
          console.log('no project');
          this.newProject();
        }
      });
      })
    
    }
   
  

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    // this.nav.setRoot(page.component);
    if (page.$key)
      this.nav.setRoot('Project', { id: page.$key });
    else
      this.nav.setRoot(page.component);
  }

  newProject() {
    let newProjectModal = this.modal.create('CreateProjectPage');
    newProjectModal.present();
  }

  create() {
    let newTaskModal = this.modal.create('CreateTaskPage');
    newTaskModal.present();
  }
}
