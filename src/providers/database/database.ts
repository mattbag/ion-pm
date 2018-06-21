import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Database {

  constructor(public af: AngularFireDatabase) {
    // console.log('Hello Database Provider');
  }

  createProject(project) {
    const db = this.af.list('/projects');
    db.push(project);
  }

  getProjects() {
    return this.af.list('/projects', {
      query: {
        orderByKey: true
      }
    });
  }

  getFirstProject() {
    return this.af.list('/projects', {
      query: {
        limitToFisrt: 1,
        orderByKey: true
      }
    });
  }

  getProject(project_id) {
    return this.af.object('/projects/' + project_id);
  }

  getSections(project_id) {
    return this.af.list('/sections/' + project_id);
  }

  getSectionList() {
    return this.af.list('/section_list');
  }

  addSection(section) {
    console.log(section);

    this.af.object('/section_list/' + section.id).set(section)
    // .then(section=>{
    //   console.log('stick this somewhere '+section.key);
    //   // this.af.object('/section_list/'+ section.key).update(section)
    // });
  }

  getTaskList() {
    return this.af.list('/task_list');
  }

  addTask(section) {
    this.af.list('/task_list').push(section);
  }

  // getTasks(project_id, section_name) {
  //   // console.log(`/tasks/${project_id}/${section_name}`);

  //   return this.af.object(`/tasks/${project_id}/${section_name}`);
  // }
  getTasks(project_id, section_key) {
    //  console.log('cannot use key so using an id '+section_key);
    // console.log(`/tasks/${project_id}/${section_name}`);

    return this.af.list(`/tasks/${project_id}/${section_key}`);
  }

  checkTask(project_id, some_index, section, value) {
    // console.log(`/tasks/${project_id}/${section.id}/${some_index}`);
    // console.log(some_index);
    this.af.object(`/tasks/${project_id}/${section.id}/${some_index}`).update({ checked: value });
    // console.log('donzo');
  }

  // tester(section_name){
  //   // console.log(section_name);
  //   return this.af.list('/tasks/performance/');
  // }
  getUsers() {
    return this.af.list('/users');
  }

  addUser(user) {
    this.af.list('/users').push(user);
  }

  addProject(project, project_sections) {
    // console.log(project_sections);
    let section_assigned: any = [];

    this.af.list('/projects').push(project)
      .then((project) => {
        // console.log("project key " + project.key);

        this.getSectionList().subscribe(sub => {
          // console.log(sub);

          project_sections.forEach(section_key => {
            // section.map( item =>{
            // console.log('proj key '+project.key);
            this.attachTasks(section_key, project.key);

            //   // item => item.name.toLowerCase().indexOf(project_sections.toLowerCase()) > -1
            // })


            sub.map(item => {
              // console.log("section from db key " + section_key);
              // console.log("item key " + item.$key);
              if (item.$key === section_key) {
                // console.log('same');
                section_assigned.push(item);
                // return true
              } else {
                // console.log('not same');
              }

            });
            // console.log(section_assigned);
            this.af.object('/sections/' + project.key).set(section_assigned);
          })

        });

      });

  } // end add project

  attachTasks(section_key, project_key) {
    let tasks_assigned: any = [];
    this.getTaskList().subscribe(resp => {
      // console.log('section key ' + section_key);
      resp.map(task => {
        // console.log(item.section);
        if (task.section === section_key) {
          // console.log('same');
          tasks_assigned.push(task);
          // return true
        } else {
          // console.log('not same');
        }
      })
      console.log(tasks_assigned);

      this.af.object('/tasks/' + project_key + '/' + section_key).set(tasks_assigned);
    });
  }
}

// get the sections of the project
// get the keys of the sections
// get the tasks related to the section from task_list