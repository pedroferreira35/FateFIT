import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user!: User;

  constructor(
    private userService: UserService,
    private authService: AuthService
    ) {

    }

  ngOnInit(): void {
    this.userService.getUserById(this.authService.getUserId()).subscribe({
      next: (user) => { this.user = user },
      error: (error) => { console.log(error) }
    })
  }

}
