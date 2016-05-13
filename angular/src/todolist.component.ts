import {Component, OnInit} from 'angular2/core';
import {Todo} from './todo';
import {TodoService} from './todo.service';
import {TodoDetailComponent} from './todo-detail.component';
import './index.css';

let template = `
        <h1>{{title}}</h1>
        <h2>My Todos</h2>
        <ul class="todos">
            <li *ngFor="#Todo of Todoes"
            [class.selected]="Todo === selectedTodo"
            (click)="onSelect(Todo)">
                <span class="badge">{{Todo.id}}</span> {{Todo.name}}
            </li>
        </ul>
        <my-Todo-detail [Todo]="selectedTodo"></my-Todo-detail>
        `;

@Component({
    selector: 'my-Todoes',
    template: template,
    directives: [TodoDetailComponent],
    providers: []
})

export class TodoListComponent implements OnInit {
    title : 'Tour of Todoes';
    Todoes : Todo[];
    selectedTodo: Todo;

    constructor(private _TodoService: TodoService)  { }

    getTodoes() {
        this._TodoService.getTodoes().then(Todoes => this.Todoes = Todoes);
    }

    ngOnInit () {
        this.getTodoes();
    }
    onSelect(Todo: Todo) { this.selectedTodo = Todo; }
}
