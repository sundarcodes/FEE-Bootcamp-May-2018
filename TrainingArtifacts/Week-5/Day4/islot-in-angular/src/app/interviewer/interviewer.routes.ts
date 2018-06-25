import { InterviewerEventComponent } from './pages/interviewer-event/interviewer-event.component';
import { InterviewerDashboardComponent } from './pages/interviewer-dashboard/interviewer-dashboard.component';
import { InterviewerHomeComponent } from './pages/interviewer-home/interviewer-home.component';
import { Route } from '@angular/router';
export const interviewerRoutes: Route[] = [
    {
        path: 'home',
        component: InterviewerHomeComponent,
        children: [
            {
                path: '',
                component: InterviewerDashboardComponent
            },
            {
                path: 'event',
                component: InterviewerEventComponent
            }
        ]
    }
];
