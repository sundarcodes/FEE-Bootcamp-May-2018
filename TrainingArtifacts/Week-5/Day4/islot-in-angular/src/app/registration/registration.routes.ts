import { InterviewerSignupComponent } from './pages/interviewer-signup/interviewer-signup.component';
import { AdminSignupComponent } from './pages/admin-signup/admin-signup.component';
import { LoginComponent } from './pages/login/login.component';
import { LandingComponent } from './pages/landing/landing.component';
import { Route } from '@angular/router';
export const registrationRoutes: Route[] = [
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'admin-signup',
        component: AdminSignupComponent
    },
    {
        path: 'interviewer-signup',
        component: InterviewerSignupComponent
    }
];
