// import { Progress } from './../../components/progress/progress';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Database } from './../../providers/database/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
// import { DecimalPipe } from '@angular/common';
/**
 * Generated class for the Project page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-project',
  templateUrl: 'project.html',
})
export class Project {
  sections: any;
  user: string = 'Admin';
  project: FirebaseObjectObservable<any[]>;
  project_id: string;
  project_progress: number;
  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public modal: ModalController,
    public _db: Database) {
  }

  ionViewDidLoad() {
    // console.log('add project details (platform?) todo');
    // console.log('progress todo');
    // console.log('manager edit todo');
    // console.log('task note todo');
    // console.log('manager users > make tabs todo ?');
    // console.log(this.project);
    this.project_id = this.navParams.get('id');
    // console.log(this.project_id);

    this.project = this._db.getProject(this.project_id);
// console.log(this.project);

    // this.sections = this._db.getSections(this.project_id);

    this.sections = this._db.getSections(this.project_id).map((section) => {
      // console.log(section);
      let all_tasks: number = 0;
      let all_tasks_done: number = 0;
      // let project_progress: number = 0;
      return section.map((section_obj) => {
        // console.log(section_obj);

        section_obj.tasks = this._db.getTasks(this.project_id, section_obj.id);

        section_obj.tasks.subscribe((resp) => {
          // console.log(resp);
          all_tasks += resp.length;

          let section_progress = resp.filter((task) => {
            // console.log(task);
            if (task.checked) {
              all_tasks_done++
              return true
            }
            // return task.checked
          })

          // console.log(all_tasks);
        //  project_progress = 100 / all_tasks * all_tasks_done;
          // this._db.getProject(this.project_id).update({progress : this.project_progress });
          //  this.project.progress = this.project_progress;
          section_obj.progress = 100 / resp.length * section_progress.length;
          // console.log(project_progress);
          

        })

        return section_obj
      })
    })

  }

  showInfo(task) {
    let taskModal = this.modal.create('TaskModal', { item: task });
    taskModal.present()
  }

  manageTask(task, section_key, section) {
    // console.log(section);

    // let activeTask: FirebaseObjectObservable<any[]> = task;
    // console.log(activeTask);

    let alert = this.alertCtrl.create({
      title: 'Task Status',
      inputs: [
        {
          type: 'radio',
          label: 'Yes',
          value: 'yes',
          checked: task.checked
        },
        {
          type: 'radio',
          label: 'No',
          value: 'no',
          checked: !task.checked
        },
        {
          type: 'radio',
          label: 'N/A',
          value: 'na'
        }]
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Confirm',
      handler: data => {
        // console.log(data);

        if (data === 'yes' && !task.checked) {

          task.checked = true;

          this.toggleTask(this.project_id, section_key, section, task.checked);

        } else if (data === 'no' && task.checked) {

          task.checked = false;

          this.toggleTask(this.project_id, section_key, section, task.checked);

        } else if (data === 'na') {
          console.log('not applicable');

        } else {
          console.log('same check');
        }
      }
    });
    alert.present();
  }

  notify(admin) {
    console.log('notification to ' + admin);
  }

  toggleTask(id, key, section, value: boolean) {
    this._db.checkTask(id, key, section, value);
  }
}
