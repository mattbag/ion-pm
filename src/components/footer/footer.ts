import { Component } from '@angular/core';

/**
 * Generated class for the Footer component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-footer',
  templateUrl: 'footer.html'
})
export class Footer {

  text: string;

  constructor() {
    console.log('Hello Footer Component');
    this.text = 'Hello World';
  }

}
