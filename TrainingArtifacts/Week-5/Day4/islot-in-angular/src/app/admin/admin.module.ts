import { SharedModule } from './../shared/shared.module';
import { adminRoutes } from './admin.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminEventComponent } from './pages/admin-event/admin-event.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [AdminHomeComponent, AdminDashboardComponent, AdminEventComponent]
})
export class AdminModule { }
