import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { Route } from "@angular/router";
import { PostsPageComponent } from './pages/posts-page/posts-page.component';


export const routes: Route[] = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'posts',
        component: PostsPageComponent
    }
]