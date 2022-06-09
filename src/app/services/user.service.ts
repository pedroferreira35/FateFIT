import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(
      `${environment.apiUrl}/user/${id}`
    )
  }

  public registerUser(user: any): void {
    console.log(user)
    this.http.post<any>(`${environment.apiUrl}/user/register`, user).subscribe({
      next: (data) => {console.log(data)},
      error: (error) => {console.log(error)}
    })
  }
}
 