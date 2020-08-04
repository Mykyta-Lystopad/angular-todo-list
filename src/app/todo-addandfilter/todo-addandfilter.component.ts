import {Component} from '@angular/core';
import {TasksservicesService} from "../services/tasksservices.service";

@Component({
  selector: 'app-todo-addandfilter',
  templateUrl: './todo-addandfilter.component.html',
  styleUrls: ['./todo-addandfilter.component.scss']
})
export class TodoAddandfilterComponent {

  title: any = '';
  searchTitle: any = '';
  constructor(
    private taskServices : TasksservicesService
  ) { }

  addTask() {
    if (this.title.trim()){
      this.taskServices.add(this.title);
      this.title = '';
    }
  }

  sortDateUp() {
    this.taskServices.sortDateUp()
  }
  sortDateDown() {
    this.taskServices.sortDateDown()
  }

  sortIndex() {
    this.taskServices.sortIndex()
  }

  sortCompleted() {
    this.taskServices.sortCompleted()
  }

  searchTask(){
    if (this.searchTitle.trim()) {
      this.taskServices.searchTask(this.searchTitle)
    }
  }

  localClear() {
    this.taskServices.localClear()
  }
}
