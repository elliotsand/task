import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  usuario: string;
  newTask: string;
  tasks: { description: string, completed: boolean }[] = [];

  constructor() {
    this.usuario = 'Nombre de usuario';
    this.newTask = '';
  }

  addTask() {
    if (this.newTask) {
      const task = { description: this.newTask, completed: false };
      this.tasks.push(task);
      this.newTask = '';
    }
  }

  deleteTask(task: { description: string, completed: boolean }) {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

  toggleDeleteButton(task: { description: string, completed: boolean }) {
    task.completed = !task.completed;
  }
}
