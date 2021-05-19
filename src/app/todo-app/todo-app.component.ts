import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../model/todo-item'

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {

  list: TodoItem[] = [];
  lastItemId = 1;
  task!: TodoItem

  constructor() { }

  ngOnInit(): void {
  }

  onTodoItemCreated(event: any){
    this.task = new TodoItem();
    this.task.id = this.lastItemId;
    this.task.description = event;
    this.list.push(this.task);
    this.lastItemId = this.lastItemId + 1
  }

  onItemStateChanged(event: TodoItem){
    this.list.forEach((item) =>{
      if(item.id == event.id){
        item.toggleCompleted()
      }
    });
  }

  onTodoItemRemoved(event: TodoItem){
    for(let i = 0; i<this.list.length; i++){
      if(this.list[i].id == event.id){
        this.list.splice(i,1);
      }
    }
  }
}
