import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit, Input } from '@angular/core';
import {TodoItem} from '../model/todo-item';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  @Input() list!: TodoItem[];
  
  
  constructor() { }

  ngOnInit(): void {
    
  }

  getCompletedTask(){
    let completed = 0;
    this.list.forEach((item)=>{
     if(item.isCompleted){
       completed++;
     }
   });
   return completed;
  }
  getPendingTask(){
    let pending = 0;
    this.list.forEach((item)=>{
      if(!item.isCompleted){
        pending++;
      }
    }) ;
    return pending;
  }

}
