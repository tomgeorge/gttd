import { Component, AfterViewInit, Directive}       from 'angular2/core';
import { HeroService }     from './hero.service';
import { TodoService }     from './todo.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { TodoListComponent } from './todolist.component';
import { MaterializeDirective } from 'angular2-materialize';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';


@Component({
    selector: 'my-app',
    template: `
    <header>
        <nav class="top-nav blue">
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
    <footer class="page-footer blue">
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
    directives: [ROUTER_DIRECTIVES]
        providers: [
            ROUTER_PROVIDERS,
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
        useAsDefault: true
    }
])

export class AppComponent {

    title = 'Is YOUR world a whirlwind of clutter?';
}
