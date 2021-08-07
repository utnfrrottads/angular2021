import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../model/todo-item';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  @Input() list!: TodoItem[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.list);
  }

  getCompletedItems(){
    let completed = 0;
    this.list.forEach((item) =>{
      if(item.isCompleted){
        completed++;
      }
    });
    return completed;
  }

  getPendingItems(){
    let pending = 0;
    this.list.forEach((item) =>{
      if(!item.isCompleted){
        pending++;
      }
    });
    return pending;
  }
}
