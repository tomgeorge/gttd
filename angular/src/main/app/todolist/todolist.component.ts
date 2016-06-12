import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo/todo.builder';
import {TodoBuilder} from '../todo/todo.builder';
import {TodoService} from '../todo/todo.service';
import {TodoDetailComponent} from '../todo/todo-detail.component';
import {TodoSummaryComponent} from '../todo/todo-summary.component';
import {MaterializeDirective} from 'angular2-materialize';
import { ConsoleLogService } from '../shared/console.log.service';
import '../todo/todo-detail.css';


@Component({
    selector: 'my-todos',
    template: require('./todolist.component.html'),
    directives: [TodoDetailComponent, TodoSummaryComponent, MaterializeDirective],
    providers: [TodoService],
})

export class TodoListComponent implements OnInit {
    title: 'Tour of Todos';
    errorMessage: string;
    Todos: Todo[];
    pendingTodo: Todo = new TodoBuilder().build();

    submitted: boolean = false;

    constructor(private TodoService: TodoService, private logger: ConsoleLogService) { }

    getTodos() {
        this.TodoService
            .getTodos()
            .subscribe(
            todos => {
                this.Todos = todos;
                this.logger.log('grabbed todos' + this.Todos);
            },
            error => this.errorMessage = <any>error);
    }

    createTodo(todo: Todo) {
        this.logger.log('todo passed to create ' + todo.description);
        if (!todo) {
            return; 
        }

        this.logger.log('create ' + todo.name);
        // ew
        todo.id = this.getNextId()
        this.TodoService.createTodo(todo)
            .subscribe(
            t => {
                this.logger.log('next thing in the stream is ' + typeof(t));
                this.Todos.push(t);
                this.logger.log('todos after create' + this.Todos
                    .map(t => '[' + t.name + '], '));
            }, 
            error => this.errorMessage = <any>error);
    }

    delete(todo: Todo) {
        this.logger.log(todo.name);
        this.TodoService.delete(todo)
        .subscribe(
            () => {
                this.logger.log(`subscribe on delete`)
                this.Todos = this.Todos.filter( t=> t.id !== todo.id);
        });
    }

    ngOnInit() {
        this.getTodos();
    }

    /* GARBAGE */
    getNextId(): number {
            let currentMax: number =  Math.max(...(this.Todos.map(t => t.id)));
            console.log('currentMax ' + currentMax);
            return ++currentMax;
    }
    
}
