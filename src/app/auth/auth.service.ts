import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,  public jwtHelper: JwtHelperService) {}

  private apiUrl = 'http://localhost:3000';
  private isLoggedIn: boolean = false;

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, { username, password });
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    let token: any = localStorage.getItem('access_token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
