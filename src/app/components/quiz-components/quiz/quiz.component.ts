import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Quiz} from '../../../dtos/quiz';
import {QuizService} from '../../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quizzes: Quiz[] = [];

  constructor(private router: Router, private quizService: QuizService) {
  }

  ngOnInit(): void {
    this.loadQuizzes();
  }


  createNewQuiz(): void {
    this.router.navigate(['/quizzes/create']);
  }


  loadQuizzes(): void {
    this.quizService.getQuizzes().subscribe((data) => {
      this.quizzes = data;
    });
  }
}
