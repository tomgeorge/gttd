import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo/todo.builder';
import {TodoBuilder} from '../todo/todo.builder';
import {TodoService} from '../todo/todo.service';
import {TodoDetailComponent} from '../todo/todo-detail.component';
import {TodoSummaryComponent} from '../todo/todo-summary.component';
import {MaterializeDirective} from 'angular2-materialize';
import '../todo/todo-detail.css';

@Component({
    selector: 'my-todos',
    template: require('./todolist.component.html'),
    directives: [TodoDetailComponent, TodoSummaryComponent, MaterializeDirective],
    providers: [TodoService],
})

export class TodoListComponent implements OnInit {
    title: 'Tour of Todos';
    Todos: Todo[];
    selectedTodo: Todo;
    newTodo: Todo = new TodoBuilder().build();
    submitted = false;
    
    constructor(private TodoService: TodoService)  { }

    getTodos() {
        //this.TodoService.getTodos().then(Todos => this.Todos = Todos);
        this.Todos = this.TodoService.getTodos();
    }

    ngOnInit () {
        this.getTodos();
    }
    onSelect(Todo: Todo) { console.log('selected: ' + Todo.description); this.selectedTodo = Todo; }

    onSubmit() { 
        console.log('Attempting to submit new todo: ' + this.newTodo.name );
        this.TodoService.addTodo(this.newTodo);
        this.getTodos();
        console.log('getTodos called: ' + this.Todos.map(t=> t.name));
    }

}
