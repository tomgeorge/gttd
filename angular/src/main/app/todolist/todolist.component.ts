import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo/todo.builder';
import {TodoService} from '../todo/todo.service';
import {TodoDetailComponent} from '../todo/todo-detail.component';
import {TodoSummaryComponent} from '../todo/todo-summary.component';
import {MaterializeDirective} from 'angular2-materialize';
import '../todo/todo-detail.css';

@Component({
    selector: 'my-todos',
    template: require('./todolist.component.html'),
    directives: [TodoDetailComponent, TodoSummaryComponent, MaterializeDirective],
    providers: [TodoService]
})

export class TodoListComponent implements OnInit {
    title: 'Tour of Todos';
    Todos: Todo[];
    selectedTodo: Todo;

    constructor(private TodoService: TodoService)  { }

    getTodos() {
        this.TodoService.getTodos().then(Todos => this.Todos = Todos);
    }

    ngOnInit () {
        this.getTodos();
    }
    onSelect(Todo: Todo) { console.log('selected: ' + Todo.description); this.selectedTodo = Todo; }




}
