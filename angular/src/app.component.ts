import {Component} from 'angular2/core';
let template = `
                <h1>My Second Angular 2 App</h1>
                <a class="waves-effect waves-light btn" href="#lol">button</a>
               `;
@Component({
    selector: 'my-app',
    template: template
})
export class AppComponent { }
