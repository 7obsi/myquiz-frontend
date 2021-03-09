import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizService} from '../../../services/quiz.service';
import {Quiz} from '../../../dtos/quiz';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent implements OnInit {

  id: number | undefined;
  private sub: any;
  quiz: Quiz | undefined;

  constructor(private route: ActivatedRoute, private quizService: QuizService) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id; // (+) converts string 'id' to a number
      this.getQuizById(this.id);
      // In a real app: dispatch action to load the details here.
    });
  }


  getQuizById(id: number): void {
    this.quizService.getQuizById(id).subscribe(newQuiz => {
      this.quiz = newQuiz;
    });
  }

}
