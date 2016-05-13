import {Component, OnInit} from 'angular2/core';
import {Todo} from './todo';
import {TodoService} from './todo.service';
import {TodoDetailComponent} from './todo-detail.component';
import { MaterializeDirective } from 'angular2-materialize';
import './index.css';

let template = `
        <h1>{{title}}</h1>
        <h2>My Todos</h2>
        <ul materialize="collapsible" class="collapsible" data-collapsible="accordian">
            <li *ngFor="#todo of Todos"
            [class.selected]="todo === selectedTodo"
            (click)="onSelect(todo)">
              <div class="collapsible-header"><i class="material-icons">filter_drama</i>{{todo.name}}</div>
              <div class="collapsible-body">
                <p><todo-detail [todo]="selectedTodo"></todo-detail></p>
              </div>
            </li>
        </ul>
        `;

@Component({
    selector: 'my-todos',
    template: template,
    directives: [TodoDetailComponent,
                 MaterializeDirective],
    providers: []
})

export class TodoListComponent implements OnInit {
    title : 'Tour of Todos';
    Todos : Todo[];
    selectedTodo: Todo;

    constructor(private _TodoService: TodoService)  { }

    getTodos() {
        this._TodoService.getTodos().then(Todos => this.Todos = Todos);
    }

    ngOnInit () {
        this.getTodos();
    }
    onSelect(Todo: Todo) { this.selectedTodo = Todo; }
}
