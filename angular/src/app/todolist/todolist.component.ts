import {Component, OnInit} from 'angular2/core';
import {Todo} from '../todo/todo';
import {TodoService} from '../todo/todo.service';
import {TodoDetailComponent} from '../todo/todo-detail.component';
import '../todo/todo-detail.css';

@Component({
    selector: 'my-todos',
    template: require('./todolist.component.html'),
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
    onSelect(Todo: Todo) { console.log('selected: ' + Todo.description); this.selectedTodo = Todo; }

    toggle(Todo: Todo) { console.log('toggled: ' + Todo.description); Todo.completed = !Todo.completed; }



}
