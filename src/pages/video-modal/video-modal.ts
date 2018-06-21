import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the VideoModal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-video-modal',
  templateUrl: 'video-modal.html',
})
export class VideoModal {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
    console.log('video_url', navParams.get('url'));
  }

  

 dismiss() {

   this.viewCtrl.dismiss();
 }

}
