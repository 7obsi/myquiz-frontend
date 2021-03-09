import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {HomeComponent} from './components/home/home.component';
import {UsersComponent} from './components/users/users.component';
import {AuthGuard} from './guards/auth.guard';
import {QuizComponent} from './components/quiz-components/quiz/quiz.component';
import {CreateQuizComponent} from './components/quiz-components/create-quiz/create-quiz.component';
import {EditQuizComponent} from './components/quiz-components/edit-quiz/edit-quiz.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'users', canActivate: [AuthGuard], component: UsersComponent},
  {path: 'quizzes', canActivate: [AuthGuard], component: QuizComponent},
  {path: 'quizzes/create', canActivate: [AuthGuard], component: CreateQuizComponent},
  {path: 'quizzes/edit/:id', canActivate: [AuthGuard], component: EditQuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
