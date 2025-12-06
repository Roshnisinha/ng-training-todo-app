import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html'
})
export class TaskFormComponent {

  taskText: string = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.taskText.trim() === '') return;
    this.taskService.addTask(this.taskText);
    this.taskText = '';
  }
}
