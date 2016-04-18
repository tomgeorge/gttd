import { Component }       from 'angular2/core';
import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: 'my-app',
    template: `
    <div class="container">
        <nav>
            <a href="#" class="brand-logo">{{title}}</a>
            <ul class="right hide-on-med-and-down">
                <li><a [routerLink]="['Dashboard']">Dashboard</a></li>
                <li><a [routerLink]="['Heroes']">Heroes</a></li>
            </ul>
        </nav>
        <router-outlet></router-outlet>
    </div>
        `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HeroService
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
        component: DashboardComponent,
        useAsDefault: true
    }
])

export class AppComponent {
    title = 'Tour of Heroes';
}
