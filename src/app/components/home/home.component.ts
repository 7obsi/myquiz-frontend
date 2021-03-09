import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {QuizService} from '../../services/quiz.service';
import {Quiz} from '../../dtos/quiz';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quizes: Quiz[] = [];
  constructor(private authService: AuthService, private quizService: QuizService) {
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      console.log(this.authService.getToken());
    }

    this.loadQuizes();
  }

  private loadQuizes(): void{
    this.quizService.getQuizzes().subscribe((res) => {
      this.quizes = res;
    });
  }
}
