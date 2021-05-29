import { Component } from '@angular/core';
import {TodoItem} from './model/todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular2021';

  list: TodoItem[] = [];
  lastId = 1;
  task!: TodoItem;

  addTask(event:any){
    this.task = new TodoItem();
    this.task.id = this.lastId;
    this.task.description = event;
    this.list.push(this.task);
    this.lastId = this.lastId + 1;
  }
  taskRemoved(event: TodoItem){
    for(let i = 0; i<this.list.length; i++){
      if(this.list[i].id === event.id){
        this.list.splice(i,1);
      }
    }
  }


}
