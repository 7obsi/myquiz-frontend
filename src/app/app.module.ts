import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmployeesComponent} from './components/employees/employees.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {JwtInterceptor} from './interceptors/jwt.interceptor';
import {ErrorInterceptor} from './interceptors/error.interceptor';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {UsersComponent} from './components/users/users.component';
import {DatePipe} from '@angular/common';
import {httpInterceptorProviders} from './interceptors';
import { CreateQuizComponent } from './components/quiz-components/create-quiz/create-quiz.component';
import { QuizComponent } from './components/quiz-components/quiz/quiz.component';
import { EditQuizComponent } from './components/quiz-components/edit-quiz/edit-quiz.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    CreateQuizComponent,
    QuizComponent,
    EditQuizComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [httpInterceptorProviders, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
