import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private apiUrl = 'http://localhost:3000'; 
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
  }
  login() {
    const credentials = {
      username: this.username,
      password: this.password,
    };

    this.http.post<any>(`${this.apiUrl}/auth/login`, credentials)
      .subscribe(
        (response) => {
          console.log('Response:', response);
          localStorage.setItem('access_token', response.access_token);
          this.router.navigate(['/users']);
        },
        (error) => {
          console.log('Error:', error);
        }
      );
  }
}

   
  
    