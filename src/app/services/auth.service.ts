import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../dtos/user';
import {Globals} from '../global/globals';
import {BehaviorSubject, Observable, pipe} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {LoginUser} from '../dtos/loginuser';
import {RegisterUser} from '../dtos/registeruser';
import {JwtResponse} from '../dtos/jwtresponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  private authBaseUri: string = this.globals.backendUri + '/api/auth';

  constructor(private http: HttpClient, private globals: Globals) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') as string));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(u: LoginUser): Observable<JwtResponse> {
    return this.http.post<any>(this.authBaseUri + '/login', u)
      .pipe(tap(res => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        this.setToken(res.accessToken);
      }));
  }

  register(u: RegisterUser): Observable<User> {
    return this.http.post<any>(this.authBaseUri + '/register', u)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout(): void {
    console.log('Logout');
    localStorage.removeItem('authToken');
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  private setToken(authResponse: string): void {
    localStorage.setItem('authToken', authResponse);
  }

  /**
   * Check if a valid JWT token is saved in the localStorage
   */
  isLoggedIn(): boolean {
    return !!this.getToken();
  }


}
