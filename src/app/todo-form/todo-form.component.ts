import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @Output() add = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


  addTask(valueText: any){
    this.add.emit(valueText.value);
    valueText.value = "";
    valueText.focus;
    return false
  }
}
