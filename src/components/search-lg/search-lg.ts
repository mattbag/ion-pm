import { Component } from '@angular/core';

/**
 * Generated class for the SearchLg component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'search-lg',
  templateUrl: 'search-lg.html'
})
export class SearchLg {
  search_terms: string = '';
  gender: string = '';


  constructor() {
    console.log('Hello SearchLg Component');
  }

  getItems(input_value){
    if(input_value != ''){
      console.log(input_value)
    }

  }

}
