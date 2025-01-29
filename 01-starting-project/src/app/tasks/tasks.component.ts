import { Component, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMYTASKS } from '../dummy-tasks';
import { NewTaksComponent } from "./new-taks/new-taks.component";
import { INewTask } from './task.model';

type dummyTasks = typeof DUMMYTASKS;


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaksComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  id = input.required<string>();
  name = input.required<string | undefined>();
  tasks: dummyTasks = [];
  isAddingTask = false;
  constructor() {
    this.tasks = DUMMYTASKS;
  }

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.id());
  }

  onCompletedTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  onAddNewTask() {
    this.isAddingTask = true;
  }

  onCancelDialog() {
    this.isAddingTask = false;
  }

  onCreateNewTask(newTask: INewTask) {
    this.tasks.push({
      id: Math.random().toString(),
      userId: this.id(),
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.date
    });
    this.isAddingTask = false;
    console.log(this.tasks);
  }

}
