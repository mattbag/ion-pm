import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
// import { Popover} from '../../pages/popover/popover';
/**
 * Generated class for the HeaderLg component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'header-lg',
  templateUrl: 'header-lg.html'
})
export class HeaderLg {

  constructor(public popoverCtrl: PopoverController) {}
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create('Popover');
    popover.present({
      ev: myEvent
    });
  }

}


