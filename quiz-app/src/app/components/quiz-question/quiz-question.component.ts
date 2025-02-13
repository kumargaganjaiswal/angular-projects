import { Component, Input, output } from '@angular/core';
import { IQuestion } from '../../models/question.model';

@Component({
  selector: 'app-quiz-question',
  standalone: true,
  imports: [],
  templateUrl: './quiz-question.component.html',
  styleUrl: './quiz-question.component.css'
})
export class QuizQuestionComponent {
  isAttempted: boolean = false;
  selectedOption: string = '';

  @Input({ required: true }) question!: IQuestion;
  nextQuestionEvent = output<number>();
  currentQuestionResultEvent = output<IQuestion>();

  onNextQuestion() {
    this.isAttempted = false
    this.nextQuestionEvent.emit(this.question.questionid);
    this.currentQuestionResultEvent.emit(this.question);
  }
  onRadioChange(event: any) {
    this.isAttempted = true;
    this.selectedOption = event.target.value;
    this.question.userAnswer = event.target.value;
    this.question.answered = true;
    this.question.isCorrect = this.question.userAnswer === this.question.correctAnswer;
  }
}
