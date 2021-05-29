import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {TodoAppComponent} from '../todo-app/todo-app.component';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @Output() addTask = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  add(Input:any){
    this.addTask.emit(Input.value);
    Input.value = '';
  }

}
