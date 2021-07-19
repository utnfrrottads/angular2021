import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../model/todo-item'
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {

  taskDescription!: string
  
  constructor(
    private service: TodoService
  ) { }

  ngOnInit(): void {
  }

  getList(){
    return this.service.getList()
  }

  onTodoItemCreated(event: TodoItem){
    this.service.addTask(event)
  }

  onItemStateChanged(event: TodoItem){
    this.service.modifyTaskStatus(event)
  }

  onTodoItemRemoved(event: TodoItem){
    this.service.removeTask(event)
  }

  onItemModified(event: TodoItem){
    this.taskDescription = this.service.modifyTaskDescription(event)
  }

  getTaskDescription(){
    return this.taskDescription
  }
}
