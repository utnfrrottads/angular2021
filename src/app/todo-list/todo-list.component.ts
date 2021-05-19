import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() list!: TodoItem[];
  @Output() itemRemoved = new EventEmitter();
  @Output() itemStateChanged = new EventEmitter();

  headers: string[] = ['Id', 'Description', 'Status'];

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(task: any){
    this.itemRemoved.emit(task);
  }

  changeStatus(task: any){
    this.itemStateChanged.emit(task)
  }
}
