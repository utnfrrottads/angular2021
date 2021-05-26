import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {

  arr:string[] = ["hola","loco","como","estas"];
  @Input() value:any = 'valor del todo-app';
  constructor() { }

  ngOnInit(): void {
  }

  add(value:any){
    this.arr.push(value);
  }

}
