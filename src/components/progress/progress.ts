import { Component, Input } from '@angular/core';

/**
 * Generated class for the Progress component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'progress-bar',
  templateUrl: 'progress.html'
})
export class Progress {

  @Input('progress') progress;

  constructor() {
    // console.log('Hello Progress Component');
    // console.log(progress);
    
  }

}
