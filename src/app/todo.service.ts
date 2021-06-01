import { Injectable } from '@angular/core';
import { TodoItem } from './model/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  list: TodoItem[] = [];
  lastItemId!: number;
  task!: TodoItem

  constructor() { 
  }

  getList(){
    if(localStorage.getItem('taskList') === null){
      return this.list
    } else {
      this.list = JSON.parse(localStorage.getItem('taskList') || '{}')
      return this.list
    }
  }

  addTask(task: any){
    this.task = new TodoItem();
    this.lastItemId = this.list.length + 1
    this.task.id = this.lastItemId;
    this.task.description = task;
    
    if(localStorage.getItem('taskList') === null){
      this.list.push(this.task)
      this.saveLocalStorage()
    } else {
      this.list = JSON.parse(localStorage.getItem('taskList') || '{}')
      this.list.push(this.task)
      this.saveLocalStorage()
    }
    
  }

  modifyTaskStatus(task: TodoItem){
    this.list.forEach(item => {
      if(item.id == task.id){
        item.isCompleted = !item.isCompleted
        this.saveLocalStorage()
      } 
    });
  }

  removeTask(task: TodoItem){
    for(let i = 0; i<this.list.length; i++){
      if(this.list[i].id == task.id){
        this.list.splice(i,1);
        this.saveLocalStorage()
      }
    }
  }

  modifyTaskDescription(task: TodoItem){
    this.list.forEach((item) =>{
      if(item.id == task.id){
      }
    });
  }

  saveLocalStorage(){
    localStorage.setItem('taskList', JSON.stringify(this.list))
  }
}


