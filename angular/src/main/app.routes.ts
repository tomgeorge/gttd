import { RouterConfig } from '@angular/router';
import { Home } from './app/home';
import { Login } from './app/login';
import { Signup } from './app/signup';
import { AuthGuard } from './app/common/auth.guard';
import { HeroesComponent } from './app/hero/heroes.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { TodoListComponent } from './app/todolist/todolist.component';

export const routes: RouterConfig = [
  {
      path: 'heroes',
      component: HeroesComponent
  },
  {
      path: 'dashboard',
      component: DashboardComponent
  },
  {
      path: 'todos',
      component: TodoListComponent
  },
  { path: '',       component:  Login },
  { path: 'login',  component: Login },
  { path: 'signup', component: Signup },
//  { path: 'home',   component: Home },
  { path: 'home',   component: Home, canActivate: [AuthGuard] },
  { path: '**',     component: Login },
];
