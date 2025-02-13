import { Component } from '@angular/core';
import { QuizStartComponent } from './components/quiz-start/quiz-start.component';
import { QuizQuestionComponent } from './components/quiz-question/quiz-question.component';
import { IQuestion, questions } from './models/question.model';
import { QuizResultComponent } from './components/quiz-result/quiz-result.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QuizStartComponent, QuizQuestionComponent, QuizResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  questions: IQuestion[] = questions;
  questionIndex = 0;
  currentQuestion: IQuestion = this.questions[0];
  isShowResult = false;
  isQuizStarted = false;
  onStartQuizApp(isQuizStarted: boolean) {
    this.isQuizStarted = isQuizStarted;
    this.questionIndex = 0;
    this.currentQuestion = this.questions[this.questionIndex];
  }

  onNextQuestion(newIndex: number) {
    if (this.questions.length > newIndex) {
      this.questionIndex = newIndex;
      this.currentQuestion = this.questions[this.questionIndex];
    } else {
      this.isQuizStarted = false;
      this.isShowResult = true;
    }
  }

  onGetAnswer(question: IQuestion) {
    const index = this.questions.findIndex(q => q.questionid === question.questionid);
    this.questions[index] = question;
  }

  get calculateCorrectAnswers() {
    return this.questions.filter(q => q.isCorrect).length;
  }
  get calculateTotalQuestions() {
    return this.questions.length;
  }
}
