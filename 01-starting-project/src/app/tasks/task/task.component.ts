import { Component, EventEmitter, input, Output } from '@angular/core';
import { DUMMYTASKS } from '../../dummy-tasks';

type Task = typeof DUMMYTASKS[0];

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  userTask = input.required<Task>();
  @Output() completedTask = new EventEmitter<string>();

  onCompledTask() {
    this.completedTask.emit(this.userTask().id);
  }
}
