import { Component }       from '@angular/core';
import { HeroService }     from './hero/hero.service';
import { HeroesComponent } from './hero/heroes.component';
import { TodoService }     from './todo/todo.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoListComponent } from './todolist/todolist.component';
import { TodoDetailComponent } from './todo/todo-detail.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';


@Component({
    selector: 'my-app',
    template: `
    <header>
        <nav class="top-nav">
            <div class="container">
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">{{title}}</a>
                        <ul class="right hide-on-med-and-down">
                            <li><a class="waves-effect waves-teal" [routerLink]="['Dashboard']">Dashboard</a></li>
                            <li><a [routerLink]="['Heroes']">Heroes</a></li>
                            <li><a [routerLink]="['Todos']">Todos</a></li>
                        </ul>
                </div>
            </div>
        </nav>
    </header>
    <main>
        <div class="container page-flexbox-wrapper">
            <router-outlet></router-outlet>
        </div>
    </main>
    <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
    `,
    directives: [ROUTER_DIRECTIVES, TodoDetailComponent, TodoListComponent],
    providers: [ROUTER_PROVIDERS,
        HeroService,
        TodoService
        ]
})

@RouteConfig([
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent
    },
    {
        path: '/todos',
        name: 'Todos',
        component: TodoListComponent,
    },
    {
        path: '/',
        redirectTo: ['Todos']
    },
    {
        path: '/notfound',
        name: 'NotFound',
        component: NotFoundComponent
    },
    {
        path: '/*path',
        redirectTo: ['NotFound']
    }
])

export class AppComponent {
    url = 'https://github.com/preboot/angular2-webpack';
    title = 'Weiners';
}
