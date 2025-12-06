// src/app/task.ts (This is your Task Service)

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// The model is in the same folder, so we use './task.model'
import { Task } from './task.model'; 

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // In-memory array (data store)
  private tasks: Task[] = [
    { id: 1, assignedTo: 'User 1', status: 'Completed', dueDate: new Date('2024-10-12'), priority: 'Low', description: 'This task is good' },
    { id: 2, assignedTo: 'User 2', status: 'In Progress', dueDate: new Date('2024-09-14'), priority: 'High', description: 'This' },
    { id: 3, assignedTo: 'User 3', status: 'Not Started', dueDate: new Date('2024-08-18'), priority: 'Low', description: 'This' },
    { id: 4, assignedTo: 'User 4', status: 'In Progress', dueDate: new Date('2024-06-12'), priority: 'Normal', description: 'This task is good' },
  ];
  private nextId = 5;

  constructor() { }

  // 1. READ (View task) [cite: 134]
  getTasks(): Observable<Task[]> {
    return of(this.tasks); 
  }

  // 2. CREATE (Add task) [cite: 133]
  addTask(task: Task): Observable<Task> {
    const newTask: Task = { ...task, id: this.nextId++ };
    this.tasks.push(newTask);
    return of(newTask);
  }

  // 3. UPDATE (Edit task) [cite: 135]
  updateTask(updatedTask: Task): Observable<Task> {
    const index = this.tasks.findIndex(t => t.id === updatedTask.id);
    if (index > -1) {
      this.tasks[index] = updatedTask;
      return of(updatedTask);
    }
    return of(null as any); 
  }

  // 4. DELETE (Delete task) [cite: 136]
  deleteTask(id: number): Observable<boolean> {
    const initialLength = this.tasks.length;
    this.tasks = this.tasks.filter(t => t.id !== id);
    return of(this.tasks.length < initialLength); 
  }
}