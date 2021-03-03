import {Injectable} from '@angular/core';
import {User} from '../dtos/user';
import {Globals} from '../global/globals';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private globals: Globals) {
  }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(this.globals.TOKEN_KEY);
    window.sessionStorage.setItem(this.globals.TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(this.globals.TOKEN_KEY) as string;
  }

  public saveUser(user: User): void {
    window.sessionStorage.removeItem(this.globals.USER_KEY);
    window.sessionStorage.setItem(this.globals.USER_KEY, JSON.stringify(user));
  }

  public getUser(): User {
    return JSON.parse(<string> sessionStorage.getItem(this.globals.USER_KEY));
  }
}
