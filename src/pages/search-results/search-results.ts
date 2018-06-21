import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchResults page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html',
})
export class SearchResults {

searchResultsArray: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.searchResultsArray = [{
      title: 'Title 1',
      excerpt: 'lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum <br> lorem ipsum lorem ipsum ',
      hasBtns: true
    },{
      title: '',
      excerpt: 'lorem ipsum',
      hasBtns: false
    },{
      title: 'Title 3',
      excerpt: '',
      hasBtns: true
    },{
      title: 'Title 4',
      excerpt: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
      hasBtns: true
    },{
      title: 'Title 1',
      excerpt: 'lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
      hasBtns: false
    },{
      title: '',
      excerpt: 'lorem ipsum',
      hasBtns: true
    },{
      title: 'Title 3',
      excerpt: '',
      hasBtns: true
    },{
      title: 'Title 4',
      excerpt: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
      hasBtns: false
    }];
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SearchResults');
  }
  openPage(page){
    console.log(page)
  }
  clickCheck(event){
    event.stopPropagation();
    console.log('wee')
  }

}
