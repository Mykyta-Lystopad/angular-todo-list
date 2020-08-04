import {Component, OnInit} from '@angular/core';
import {TasksservicesService} from "../services/tasksservices.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-todo-mainblock',
  templateUrl: './todo-mainblock.component.html',
  styleUrls: ['./todo-mainblock.component.scss']
})
export class TodoMainblockComponent implements OnInit {

  array: Observable<any>;

  constructor(
    private taskServices : TasksservicesService
  ) { }

  ngOnInit() {
      this.array = this.taskServices.todos;
  }

}
