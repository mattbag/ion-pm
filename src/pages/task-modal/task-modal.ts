import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the TaskModal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-task-modal',
  templateUrl: 'task-modal.html',
})
export class TaskModal {
modalTask: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
    // console.log('task', navParams.get('item'));
    this.modalTask = navParams.get('item');
    console.log(this.modalTask);
    
  }

  

 dismiss() {

   this.viewCtrl.dismiss();
 }

}
