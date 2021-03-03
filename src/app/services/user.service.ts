import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../dtos/user';
import {Observable} from 'rxjs';
import {Globals} from '../global/globals';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userBaseUri: string = this.globals.backendUri + '/api';


  constructor(private http: HttpClient, private globals: Globals) {
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.userBaseUri + '/users');
  }
}
