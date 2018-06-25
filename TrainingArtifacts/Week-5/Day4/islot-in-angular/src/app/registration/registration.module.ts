import { registrationRoutes } from './registration.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminSignupComponent } from './pages/admin-signup/admin-signup.component';
import { InterviewerSignupComponent } from './pages/interviewer-signup/interviewer-signup.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(registrationRoutes)
  ],
  declarations: [LandingComponent, LoginComponent, AdminSignupComponent, InterviewerSignupComponent]
})
export class RegistrationModule { }
