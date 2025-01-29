import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INewTask } from '../task.model';

@Component({
  selector: 'app-new-taks',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-taks.component.html',
  styleUrl: './new-taks.component.css'
})
export class NewTaksComponent {
  @Output() onCancelEvent = new EventEmitter<void>();

  @Output() onCreateNewTask = new EventEmitter<INewTask>();


  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel() {
    this.onCancelEvent.emit();
  }

  onCreateTask() {
    this.onCreateNewTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    });
    this.onCancelEvent.emit();
  }
}
