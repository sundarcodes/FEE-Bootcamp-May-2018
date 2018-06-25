import { interviewerRoutes } from './interviewer.routes';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewerEventComponent } from './pages/interviewer-event/interviewer-event.component';
import { InterviewerHomeComponent } from './pages/interviewer-home/interviewer-home.component';
import { InterviewerDashboardComponent } from './pages/interviewer-dashboard/interviewer-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(interviewerRoutes)
  ],
  declarations: [InterviewerEventComponent, InterviewerHomeComponent, InterviewerDashboardComponent]
})
export class InterviewerModule { }
