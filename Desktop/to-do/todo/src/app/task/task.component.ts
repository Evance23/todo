import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
  })
  export class TaskComponent implements OnInit {
    ngOnInit() {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
      }

    tasks:Task[] = [];

    public newTask;
  

    public addToList() {
        if (this.newTask == '') {
        }
        else {
            this.tasks.push(this.newTask);
            this.newTask = '';
        }
    }
    public deleteTask(index) {
      this.tasks.splice(index, 1);
  }
}
  
  //   constructor() { }
  
  //   ngOnInit() {
  //   }
  
  // }