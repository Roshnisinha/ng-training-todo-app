// src/app/task.model.ts

export interface Task {
  id: number;
  assignedTo: string; // *Required field
  status: 'Completed' | 'In Progress' | 'Not Started'; // *Required field
  dueDate: Date | null;
  priority: 'High' | 'Normal' | 'Low'; // *Required field
  description: string; // Corresponds to the 'Comments' field
}