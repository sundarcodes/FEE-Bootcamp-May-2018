import { AdminEventComponent } from './pages/admin-event/admin-event.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { Route } from '@angular/router';


export const adminRoutes: Route[] = [
    {
        path: 'home',
        component: AdminHomeComponent,
        children: [
            {
                path: '',
                component: AdminDashboardComponent
            },
            {
                path: 'event',
                component: AdminEventComponent
            }
        ]
    },

]