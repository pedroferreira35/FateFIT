import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CheckinComponent } from './checkin/checkin.component';
import { AuthGuard } from './guards/auth-guard.service';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  {path: '', component: LoginComponent, canActivate: [AuthGuard]},
  {path: 'user-register', component: UserRegisterComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'manage-users', component: ManageUserComponent, canActivate: [AuthGuard]},
  {path: 'help', component: HelpComponent, canActivate: [AuthGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'checkin', component: CheckinComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
