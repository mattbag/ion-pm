import { Component, Input } from '@angular/core';

/**
 * Generated class for the ProgressIonic component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'progress-ionic',
  templateUrl: 'progress-ionic.html'
})
export class ProgressIonic {
@Input('progress') progress;
  // text: string;

  constructor() {
    // console.log('Hello ProgressIonic Component');
    // this.text = 'Hello World';
  }

}
