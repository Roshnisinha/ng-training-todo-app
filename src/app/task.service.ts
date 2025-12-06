import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: any[] = [];

  constructor() { }

  getTasks() {
    return this.tasks;
  }

  addTask(task: string) {
    this.tasks.push(task);
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
