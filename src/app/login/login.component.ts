import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Credentials } from '../models/Credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public credentials: Credentials;

  constructor(private authService: AuthService, private router: Router) {
    this.credentials = {email: "", password: ""}
  }

  ngOnInit(): void {
    if (this.authService.hasSession()) {
      if (this.authService.isAdmin()) {
        this.router.navigate(['admin']);
      } else {
        this.router.navigate(['profile'])
      }
    }
  }

  public signin(credentials: Credentials): void {
    try {
      this.authService.signin(this.credentials);
      this.router.navigate(['/admin']);
    } catch (error) {
      console.log(error)
    }
  }

}
