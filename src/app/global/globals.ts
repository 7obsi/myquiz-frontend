import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Globals {
  readonly backendUri: string = 'http://localhost:8080';
  TOKEN_KEY = 'auth-token';
  USER_KEY = 'auth-user';


}
