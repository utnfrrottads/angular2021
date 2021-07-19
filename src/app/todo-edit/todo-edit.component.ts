import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {

  @Input() description!: string
  @Output() edit = new EventEmitter()

  ngOnInit(): void {
  }

  toggleShown(){
  }

  editTask(valueText: any){
    //this.edit.emit(valueText.value)
    console.log(this.description)
    return false
  }

  getDescription(){
    return this.description
  }

}
