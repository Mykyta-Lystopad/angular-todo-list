import { Component, OnInit } from '@angular/core';
import {TasksservicesService} from "./services/tasksservices.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    private taskServices : TasksservicesService
  ) {}

  ngOnInit() {
    this.taskServices.todos.subscribe(
      (task) => {
      }
    )

  }
}
