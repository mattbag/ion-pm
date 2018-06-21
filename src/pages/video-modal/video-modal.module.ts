import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoModal } from './video-modal';
// import { ResponsiveModule } from 'ng2-responsive';

@NgModule({
  declarations: [
    VideoModal,
  ],
  imports: [
    IonicPageModule.forChild(VideoModal),
    // ResponsiveModule
  ],
  exports: [
    VideoModal
  ]
})
export class VideoModalModule {}
