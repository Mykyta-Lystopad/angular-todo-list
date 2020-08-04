import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";

export interface Task {
  title: string;
  lineThrough: string;
  userId: string | number;
  completed: boolean;
  index: number;
  taskTime: string;
  taskDate: string;
  time: number;
}

@Injectable({
  providedIn: 'root'
})
export class TasksservicesService {

  readonly key: string = 'Tasks';
  private storage: any = localStorage.getItem(this.key);
  private array: Task[] = [];
  private subj: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(
    private http: HttpClient
  ) {
    this.load();
  }

  get todos() {
    return this.subj.asObservable();
  }

  save() {
    localStorage.setItem(this.key, JSON.stringify(this.array));
    this.subj.next(this.array);
  }

  date(){
    let year = new Date().getFullYear(),
      month = new Date().getMonth()+1,
      day = new Date().getDay(),
      hour = new Date().getHours(),
      minute = new Date().getMinutes(),
      seconds = new Date().getSeconds(),
      date = Number(`${year}${month}${day}${hour}${minute}${seconds}`);

    return date
  }

  add(task: string){
    const object: Task = {
      taskDate: new Date().toLocaleDateString(),
      taskTime: new Date().toLocaleTimeString(),
      time: this.date(),
      title: task,
      index: 1,
      lineThrough: '',
      userId: (Math.random()+1.05).toFixed(3),
      completed: false,

    };
    this.array.push(object);
    this.save();
  }

  load() {
    if ( this.storage ) {
      let json = JSON.parse(this.storage);
      this.array = json;
    }
    else {
      this.http.get<Task[]>('http://jsonplaceholder.typicode.com/todos?_limit=3')
        .subscribe(response => {
          for (let i of response) {
            this.add(i.title);
          }
        })
    }
   this.save();
  }

  removeTask(userId: any) {
    console.log(userId)
    for (let i of this.array) {
      if (i.userId === userId) {
        this.array = this.array.filter((p => p.userId !== userId))
      }
    }
    this.save();
  }

  indexIncrease(index: number, userId: number) {
      for (let i of this.array){
        if ( userId === i.userId) {
          i.index++;
          console.log(index)
        }
      }
    this.save();
    }

    indexDecrease(index: number,  userId: any) {
      for (let i of this.array){
        if ( userId === i.userId) {
          if (i.index === 1) {
            i.index = 1;
          }
          else {
            i.index--;
            console.log(index)
          }
        }
      }
      this.save();
    }

    doneTask(userId: any) {
      for (let i of this.array) {
        if (i.userId === userId) {
          if (i.completed === false) {
            i.lineThrough = 'line-through';
            i.completed = true;
          }
          else if (i.completed === true) {
            i.lineThrough = '';
            i.completed = false;
          }
        }
      }
      this.save();
    }

    rewriteTask(title: string, time: string) {
      console.log(title)
      for (let i of this.array) {
        if (i.taskTime === time) {
          i.title = title;
          i.lineThrough = '';
          i.completed = false;
        }
      }
      this.save();
    }

  sortIndex(){
      if (this.array[0].index < this.array[this.array.length-1].index){
        this.array.sort( (a, b) => b.index - a.index);
      }
      else {
        this.array.sort( (a, b) => a.index - b.index);
      }
    this.save();
  }

  sortDateUp() {
    this.array.sort( (a, b) => b.time - a.time);
    this.save();
  }
  sortDateDown() {
    this.array.sort( (a, b) =>  a.time - b.time);
    this.save();
  }

  sortCompleted() {
    if (this.array[0].completed === false){
      this.array.sort( (a, b) =>{
        return Number(b.completed) - Number(a.completed);
      })
    }
    else if (this.array[0].completed === true){
      this.array.sort( (a, b) => {
        return Number(a.completed) - Number(b.completed);
      })
    }
    console.log(this.array[0].completed);
    this.save();
  }

  searchTask(searchTitle: string) {
    if (searchTitle === '') {
      this.subj.next(this.array);
    }
    else {
      this.subj.next(this.array.filter(elem => {
        return elem.title.search(searchTitle) != -1;
      }))
    }
  }
}

