export class TodoItem {
    id: any;
    description: any;
    isCompleted: boolean = false;
  
    toggleCompleted() {
      this.isCompleted = !this.isCompleted;
    }

  }
  