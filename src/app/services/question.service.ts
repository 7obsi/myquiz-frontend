import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../global/globals';
import {Observable} from 'rxjs';
import {Question} from '../dtos/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private questionBaseUri: string = this.globals.backendUri + '/questions';

  constructor(private httpClient: HttpClient, private globals: Globals) { }

  /**
   * Loads all questions from the backend
   */
  getQuestions(): Observable<Question[]> {
    console.log('get all question');
    return this.httpClient.get<Question[]>(this.questionBaseUri);
  }

  /**
   * Loads specific question from the backend
   * @param id of question to load
   */
  getQuestionById(id: number): Observable<Question> {
    console.log('Load question details for ' + id);
    return this.httpClient.get<Question>(this.questionBaseUri + '/' + id);
  }

  /**
   * Persists question to the backend
   * @param question to persist
   */
  createArtist(question: Question): Observable<Question> {
    console.log('Create question with id: ' + question.id);
    return this.httpClient.post<Question>(this.questionBaseUri, question);
  }

  /**
   * delete question from backend
   * @param id of question to delete
   */
  deleteQuestion(id: number): Observable<any> {
    console.log('Delete question with id ' + id);
    return this.httpClient.delete<any>(this.questionBaseUri + '/' + id);
  }

}
