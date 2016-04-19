import { Component }       from 'angular2/core';
import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { TodoContextComponent } from './todo-context.component';
import { TodoContextService } from './todo-context.service';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: 'my-app',
    template: `
        <header>
            <nav class="top-nav">
                <div class="container">
                    <div class="nav-wrapper">
                        <a href="#" class="brand-logo">{{title}}</a>
                        <ul class="right hide-on-med-and-down">
                            <li class="active"><a [routerLink]="['Dashboard']">Dashboard</a></li>
                            <li><a [routerLink]="['Heroes']">Heroes</a></li>
                        </ul>
                    </div>
                </div>
                <todo-context>Scooby Doo</todo-context>
            </nav>
        </header>
    	<div class="container">
        	<router-outlet></router-outlet>
    	</div>
        `,
    directives: [ROUTER_DIRECTIVES,
    			 TodoContextComponent],
    providers: [
        ROUTER_PROVIDERS,
        HeroService,
        TodoContextService
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
    },
    {
        path: '/contexts',
        name: 'Contexts',
        component: TodoContextComponent
    }
])

export class AppComponent {
    title = 'gttd';
}
