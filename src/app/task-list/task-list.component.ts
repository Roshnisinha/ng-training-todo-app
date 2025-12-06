import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {

  constructor(public taskService: TaskService) {}

  deleteTask(i: number) {
    this.taskService.deleteTask(i);
  }
}
