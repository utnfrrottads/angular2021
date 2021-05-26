import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {TodoItem} from '../model/todo-item';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {

  @Input() list: TodoItem[] = [];

  @Output() taskRemoved = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(task:any){
    this.taskRemoved.emit(task);
  }
  changeStatus(task:TodoItem){
    task.toggleCompleted();
  }
}
