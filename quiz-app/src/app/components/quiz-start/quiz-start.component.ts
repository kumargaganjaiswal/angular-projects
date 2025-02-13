import { Component, output } from '@angular/core';

@Component({
  selector: 'app-quiz-start',
  standalone: true,
  imports: [],
  templateUrl: './quiz-start.component.html',
  styleUrl: './quiz-start.component.css'
})
export class QuizStartComponent {
  startQuizEvent = output<boolean>();

  onStartQuiz() {
    this.startQuizEvent.emit(true);
  }

}
