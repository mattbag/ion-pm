import { FirebaseListObservable } from 'angularfire2/database';
import { Database } from './../../providers/database/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the ManagerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-manager',
  templateUrl: 'manager.html',
})
export class ManagerPage {
  sections: FirebaseListObservable<any[]>;
  tasks: FirebaseListObservable<any[]>;
  users: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, 
  public modal: ModalController,
  public navParams: NavParams, 
  public _db: Database) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagerPage');
    this.sections = this._db.getSectionList();
    this.tasks = this._db.getTaskList();
    this.users = this._db.getUsers();
  }
   create() {
    let newTaskModal = this.modal.create('CreateTaskPage');
    newTaskModal.present();
  }

  removeSection(s){
console.log(s);

  }
  editSection(s){
console.log(s);

  }
  removeTask(t){
console.log(t);

  }
   editTask(t){
console.log(t);

  }

}
