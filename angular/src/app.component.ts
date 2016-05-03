import { Component, AfterViewInit, Directive}       from 'angular2/core';
import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { TodoContextComponent } from './todo-context.component';
import { TodoContextService } from './todo-context.service';
import { MaterializeDirective } from 'angular2-materialize';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

declare var $:any;

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
                        </ul>
                </div>
            </div>
            <!--<todo-context>Scooby Doo</todo-context>-->
        </nav>
    </header>
    <main>
        <div class="container">
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
    directives: [ROUTER_DIRECTIVES,
        TodoContextComponent],
        providers: [
            ROUTER_PROVIDERS,
            HeroService,
            TodoContextService
        ]
=======
						<ul class="side-nav" id="slide-out">
							<li><a href="sass.html">Sass</a></li>
							<li><a href="badges.html">Components</a></li>
							<li><a href="collapsible.html">Javascript</a></li>
							<li><a href="mobile.html">Mobile</a></li>
						</ul>
					</div>
                </nav>
        <!-- <todo-context>Scooby Doo</todo-context> -->
        </header>
    	<div class="container">
        <ul materialize="collapsible" class="collapsible" data-collapsible="accordion">
          <li>
            <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
          </li>
        </ul>
        	<router-outlet></router-outlet>
    	</div>
        `,
    directives: [ROUTER_DIRECTIVES,
    			 TodoContextComponent,
                 MaterializeDirective],
    providers: [
        ROUTER_PROVIDERS,
        HeroService,
        TodoContextService,
        MaterializeDirective
    ]
>>>>>>> Stashed changes
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
