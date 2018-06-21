import { ProgressIonic } from './../../components/progress-ionic/progress-ionic';
import { Progress } from './../../components/progress/progress';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Project } from './project';

@NgModule({
  declarations: [
    Project,
    Progress,
    ProgressIonic
  ],
  imports: [
    IonicPageModule.forChild(Project),
  ],
  exports: [
    Project
  ]
})
export class ProjectModule {}
