import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Workout } from '../models/Workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private http: HttpClient) { }

  public getWorkoutByUserId(userId: number): Observable<Workout> {
    return this.http.get<Workout>(
      `${environment.apiUrl}/workout/${userId}`
    )
  }
}
