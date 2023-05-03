import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';
import { User } from '../Models/user';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signupUrl = 'http://localhost:3307/auth/signup';
  private loginUrl = 'http://localhost:3307/auth/login';

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  token: string = '';

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) { }

  signup(user: Omit<User, "id">): Observable<User> {
    return this.http.post<User>(this.signupUrl, user, this.httpOptions).pipe(
      catchError(this.errorHandlerService.handleError<User>("signup")),
    )
  }

  login(user: Pick<User, "email" | "password">): Observable<User> {
    return this.http.post<User>(this.loginUrl, user, this.httpOptions).pipe(
      catchError(this.errorHandlerService.handleError<User>("login")),
      tap(response => {
        if (response.token) {
          this.token = response.token;
        }
      })
    )
  }
  isAdmin(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.role === 'admin';
    } else {
      return false;
    }
  }

}
