import { Component, OnInit } from '@angular/core';
import { Workout } from '../models/Workout';
import { AuthService } from '../services/auth.service';
import { WorkoutService } from '../services/workout.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss']
})
export class CheckinComponent implements OnInit {

  public workout!: Workout;

  constructor(
    private workoutService: WorkoutService, 
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.workoutService.getWorkoutByUserId(this.authService.getUserId()).subscribe({
      next: (workout) => { this.workout = workout },
      error: (error) => { console.log(error) }
    })
  }

}
