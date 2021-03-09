import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../global/globals';
import {Observable} from 'rxjs';
import {Answer} from '../dtos/answer';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  private answerBaseUri: string = this.globals.backendUri + '/answers';

  constructor(private httpClient: HttpClient, private globals: Globals) { }

  /**
   * Loads all answers from the backend
   */
  getAnswers(): Observable<Answer[]> {
    console.log('get all answers');
    return this.httpClient.get<Answer[]>(this.answerBaseUri);
  }

  /**
   * Loads specific answer from the backend
   * @param id of answer to load
   */
  getAnswerById(id: number): Observable<Answer> {
    console.log('Load Answer details for ' + id);
    return this.httpClient.get<Answer>(this.answerBaseUri + '/' + id);
  }

  /**
   * Persists answer to the backend
   * @param answer to persist
   */
  createArtist(answer: Answer): Observable<Answer> {
    console.log('Create answer with id: ' + answer.id);
    return this.httpClient.post<Answer>(this.answerBaseUri, answer);
  }

  /**
   * delete employee from backend
   * @param id of employee to delete
   */
  deleteAnswer(id: number): Observable<any> {
    console.log('Delete answer with id ' + id);
    return this.httpClient.delete<any>(this.answerBaseUri + '/' + id);
  }
}
