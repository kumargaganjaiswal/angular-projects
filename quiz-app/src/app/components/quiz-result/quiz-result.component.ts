import { Component, input } from '@angular/core';

@Component({
  selector: 'app-quiz-result',
  standalone: true,
  imports: [],
  templateUrl: './quiz-result.component.html',
  styleUrl: './quiz-result.component.css'
})
export class QuizResultComponent {
  totalQuestions = input.required<number>();
  totalCorrectAnswers = input.required<number>();

}
