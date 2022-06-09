import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Credentials } from '../models/Credentials';
import { ResponseLogin } from '../models/ResponseLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private session: boolean = false;
  private admin: boolean = false;
  private token: string = "";
  private userId!: number;

  constructor(private http: HttpClient) {}

  signin(credentials: Credentials): void {
    const result = this.http.post<ResponseLogin>(
      `${environment.apiUrl}/signin`,
      credentials
    ).subscribe({
      next: (data) => {
        this.admin = data.admin;
        this.token = data.token;
        this.session = true;
        this.userId = data.userId;
      },
      error: (error) => {
        alert(error.error.message)
        console.error(error)
      }
    })
  }

  hasSession(): boolean {
    return this.session
  }

  isAdmin(): boolean {
    return this.admin
  }

  getToken(): string {
    return this.token
  }

  getUserId(): number {
    return this.userId
  }

}
