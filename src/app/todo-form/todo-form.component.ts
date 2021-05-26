import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {TodoAppComponent} from '../todo-app/todo-app.component';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @Input() iCont = '';
  @Output() oCont = new EventEmitter();
  //todoApp?: TodoAppComponent;
  @Input() todoApp?: TodoAppComponent
  constructor() { }

  ngOnInit(): void {
  }
  add(Input:any){
    //this.iCont = Input.value;
    this.oCont.emit(Input.value);
    this.todoApp?.add(Input.value);
  }

}
