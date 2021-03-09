import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../global/globals';
import {Observable} from 'rxjs';
import {Question} from '../dtos/question';
import {Quiz} from '../dtos/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private quizBaseUri: string = this.globals.backendUri + '/api/quizzes';

  constructor(private httpClient: HttpClient, private globals: Globals) { }

  /**
   * Loads all quizes from the backend
   */
  getQuizzes(): Observable<Quiz[]> {
    console.log('get all quizzes');
    return this.httpClient.get<Quiz[]>(this.quizBaseUri);
  }

  /**
   * Loads specific quiz from the backend
   * @param id of quiz to load
   */
  getQuizById(id: number): Observable<Quiz> {
    console.log('Load quiz details for ' + id);
    return this.httpClient.get<Quiz>(this.quizBaseUri + '/' + id);
  }

  /**
   * Persists quiz to the backend
   * @param quiz to persist
   */
  createQuiz(quiz: Quiz): Observable<Quiz> {
    console.log('Create quiz with id: ' + quiz.id);
    return this.httpClient.post<Quiz>(this.quizBaseUri, quiz);
  }

  /**
   * delete quiz from backend
   * @param id of quiz to delete
   */
  deleteQuestion(id: number): Observable<any> {
    console.log('Delete quiz with id ' + id);
    return this.httpClient.delete<any>(this.quizBaseUri + '/' + id);
  }
}
