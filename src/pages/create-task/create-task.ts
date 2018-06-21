import { FirebaseListObservable } from 'angularfire2/database';
import { Database } from './../../providers/database/database';
import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-create-task',
  templateUrl: 'create-task.html',
})
export class CreateTaskPage {
  
  info_amount: number = 0;
  info_array: any = [];
  user_name: string = '';
  user_data: {};
  user_email: string ='@atlasagency.com.au';
  users: FirebaseListObservable<any[]>;

  section_data: {};
  section_name: string;
  section_admin: string;
  section_icon: string;
  section_list: FirebaseListObservable<any[]>;

  task_data: {};
  task_name: string;
  task_section: string;
  task_list: FirebaseListObservable<any[]>;

  type: string;

  constructor(public viewCtrl: ViewController,
    public navParams: NavParams,
    public _db: Database) {
    this.type = "section";
    this.section_list = this._db.getSectionList();
    this.users = this._db.getUsers();
    //  this.user_email = this.user_name + '@atlasagency.com.au';
  }

  updateEmail() {
    // console.log('ionViewDidLoad CreateTaskPage');
    this.user_email = this.user_name + '@atlasagency.com.au';
  }

  dismiss() {
    //  let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss();
  }

  addSection() {
    this.section_data = {
      "id": this.section_name.toLowerCase().split(' ').join('').toString(),
      "label": this.section_name,
      "admin": this.section_admin,
      "icon": this.section_icon,
      "progress": 0
    }
    console.log(this.section_data);

    this._db.addSection(this.section_data);
     this.viewCtrl.dismiss();
    // setTimeout(() => { this.viewCtrl.dismiss() }, 500)
  }

  addTask() {
    this.task_data = {
      "id": this.task_name.toLowerCase().split(' ').join('').toString(),
      "label": this.task_name,
      "section": this.task_section,
      "checked": false,
      "info": this.info_array
    }
    // console.log(this.task_data);

    this._db.addTask(this.task_data);
     this.viewCtrl.dismiss();
    // setTimeout(() => { this.viewCtrl.dismiss() }, 500)
  }


  addTaskInfo() {
    this.info_amount++;
    this.info_array.push({id: this.info_amount, text: ''});
    // console.log(this.info_amount);
     console.log(this.info_array);

  }

  removeInfo(key) {
    let index = this.info_array.indexOf(key);
    //  console.log(index);

    this.info_array.splice(index, 1);
    //  console.log(this.info_array);
  }

  addUser() {
    this.user_data = {
      "name": this.user_name,
      "email": this.user_email
    }
    // console.log(this.user_data);

    this._db.addUser(this.user_data);
     this.viewCtrl.dismiss();
    // setTimeout(() => { this.viewCtrl.dismiss() }, 500)
  }
}