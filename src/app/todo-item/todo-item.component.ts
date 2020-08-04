import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Task, TasksservicesService} from "../services/tasksservices.service";


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input('myTask') myTask: Task;
  @Input('userId') userId: any;
  @Input('index') index: any;
  @Input('title') title: string;
  @Input('taskTime') taskTime: string;
  @Input('lineThrough') lineThrough: string;
  @Input() bgClass: string = '';
  @Input() deleteWindow: string = '';
  @Input() rewriteWindow: string = '';
  @Input() rewriteArea: string;
  constructor(
    private taskServices : TasksservicesService
  ) { }

  ngOnInit() {

  }

  indexIncrease(index: number, userId: any){
    this.taskServices.indexIncrease(index, userId)
  }

  indexDecrease(index: number, userId: any){
    this.taskServices.indexDecrease(index, userId)
  }

  doneTask(userId: any){
    this.taskServices.doneTask(userId)
  }

  removeTask(userId){
    this.deleteWindow = 'visible';
    this.bgClass = 'visible';
    this.userId = userId;
    if (this.denyDeleteTask) {
      return false;
    }
    else if (this.applyDeleteTask) {
    }
  }
  denyDeleteTask() {
    this.deleteWindow = '';
    this.rewriteWindow = '';
    this.bgClass = '';
  }
  applyDeleteTask() {
    console.log(this.rewriteArea)
    this.taskServices.removeTask(this.userId);
    this.taskServices.rewriteTask(this.rewriteArea, this.taskTime);
    this.deleteWindow = '';
    this.rewriteWindow = '';
    this.bgClass = '';
  }
  // rewrite task
  rewriteTask(title: string, time: string) {
    this.rewriteWindow = 'visible';
    this.bgClass = 'visible';
    this.rewriteArea = title;
    this.taskTime = time;
  }
}
