import { FirebaseListObservable } from 'angularfire2/database';
import { Database } from './../../providers/database/database';
import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the CreateProjectPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-project',
  templateUrl: 'create-project.html',
})
export class CreateProjectPage {
  nav: any;
  project_key: any;
  project_date: string = new Date().toISOString();;
  project_name: string;
  project_data: {
    "id": any;
    "name": string;
    "launch": string;
    // "sections": any;
    "progress": number;
  };
  section_list: FirebaseListObservable<any[]>;
  project_sections: any;

  constructor(public viewCtrl: ViewController,
    public navParams: NavParams,
    public _db: Database) {
    this.section_list = this._db.getSectionList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateProjectPage');
  }
  addProject() {
    this.project_data = {
      "id": this.project_name.toLowerCase().split(' ').join('').toString(),
      "name": this.project_name,
      "launch": this.project_date,
      // "sections": this.project_sections,
      "progress": 0
    }
    // console.log(this.project_sections);
    this._db.addProject(this.project_data,this.project_sections);

    this.dismiss();

    //  this.nav.push('Project', { id: project[0].$key });

  }
  dismiss() {
    //  let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss();
  }

}
