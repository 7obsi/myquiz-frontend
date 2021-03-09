import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {Globals} from '../global/globals';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private globals: Globals) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authUri = this.globals.backendUri + '/api/auth';

    console.log(request.url);
    // Do not intercept authentication requests
    if (request.url.startsWith(authUri)) {
      return next.handle(request);
    }

    const authReq = request.clone({
      headers: request.headers.set('Authorization', 'Bearer ' + this.authService.getToken())
    });

    console.log(authReq);

    return next.handle(authReq);
  }
}
