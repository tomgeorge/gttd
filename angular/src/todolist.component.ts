import {Component, OnInit} from 'angular2/core';
import {Todo} from './todo';
import {TodoService} from './todo.service';
import {TodoDetailComponent} from './todo-detail.component';

let template = `
        <h1>{{title}}</h1>
        <h2>My Todos</h2>
        <ul class="collapsible" data-collapsible="accordian">
            <li *ngFor="#todo of Todos"
            (click)="onSelect(todo)">
              // <div id="this"
              //    class="collapsible-header">
              //   <i class="material-icons green">done</i>
              //   <!-- <input class="toggle green" type="checkbox" (click)="toggle()" [checked]="item.completed"> -->
              //   <span class="waves-effect">{{todo.name}}</span>
              // </div>
              <div id="this" class="collapsible-header"><i class="material-icons">label_outline</i>{{todo.name}}</div>
              <div class="collapsible-body">
                <p><todo-detail [todo]=todo></todo-detail></p>
              </div>
            </li>
        </ul>
        `;

@Component({
    selector: 'my-todos',
    template: template,
    directives: [TodoDetailComponent],
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
