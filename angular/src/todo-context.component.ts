import { Component, OnInit, ElementRef } from 'angular2/core';
import { TodoContext } from './todo-context';
import { TodoContextService } from './todo-context.service';
import { MaterializeDirective } from 'angular2-materialize';
import 'material-icons/css/material-icons.min.css';

let template = `
                <a materialize="sideNav" href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
                <ul id="nav-mobile" class="side-nav fixed">
                    <li class="bold" *ngFor="#context of contexts"><a href="#!">{{context.name}}</a></li>
                </ul>
                <ul id="slide-out" class="side-nav">
                    <li class="bold" *ngFor="#context of contexts"><a href="#!">{{context.name}}</a></li>
                </ul>

`;


@Component({
    selector: 'todo-context',
    directives: [MaterializeDirective],
    template: template,
    styles: [`
        header, main, footer {
            padding-left: 240px;
        }

        @media only screen and (max-width : 992px) {
            header, main, footer {
                padding-left: 0;
            }
        }
        `]
})
export class TodoContextComponent implements OnInit {
    contexts: TodoContext[] = [];

    constructor(private _todoContextService: TodoContextService) { }

    ngOnInit() {
        this._todoContextService.getTodoContexts()
            .then(contexts => this.contexts = contexts);
    }
}
