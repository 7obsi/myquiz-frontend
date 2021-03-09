import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MustMatch} from '../../../validators/match-password.validator';
import {RegisterUser} from '../../../dtos/registeruser';
import {first} from 'rxjs/operators';
import {Quiz} from '../../../dtos/quiz';
import {QuizService} from '../../../services/quiz.service';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent implements OnInit {

  createQuizForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private quizService: QuizService) {

    this.createQuizForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null],
      questions: this.formBuilder.array([this.formBuilder.group({point: ''})])
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  ngOnInit(): void {
  }

  get f(): any {
    return this.createQuizForm.controls;
  }


  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.createQuizForm.invalid) {
      return;
    }

    const newQuiz = new Quiz(0, this.f.title.value, this.f.description.value, []);

    console.log(newQuiz);
    this.loading = true;
    this.quizService.createQuiz(newQuiz)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/quizzes/edit', data.id]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }

}
