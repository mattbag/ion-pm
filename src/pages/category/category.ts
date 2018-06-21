import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Category page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class Category {
repeater: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //  dummy repeater
    // this.repeater = Array(5).fill().map((x,i)=>i); // [0,1,2,3,4]
    this.repeater = Array(5).fill(4); // [4,4,4,4,4]
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad Category');
  }

}
