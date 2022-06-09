import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  userForm = this.formBuilder.group({
    email: "",
    name: "",
    password: "1234",
    address: "",
    phone: "",
  })

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
    ) { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.userService.registerUser((this.userForm.value));
    this.userForm.reset();
  }

}
