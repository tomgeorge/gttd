import {Injectable} from '@angular/core';
import {Todo} from './todo.builder';
import {TODOS} from './mock-todos';

@Injectable()
export class TodoService {
    todoList: Todo[] = [];

    constructor () {
        this.todoList = TODOS;
    }
    getTodos() {
        /*let promise = Promise.resolve(TODOS);
        promise.then(t => this.todoList = t);
        return promise;*/
        return this.todoList;
        
    }
    getTodosSlowly() {
        return new Promise<Todo[]>(resolve =>
            setTimeout(() => resolve(TODOS), 2000)
        );
    }
    addTodo(todo: Todo) {
        console.log('Adding a todo: ' + todo.name);
        this.todoList = this.todoList.concat(todo);
        console.log('Logging list: ' + this.todoList.map(t => t.name));
        //TODOS.concat(todo);
    }
}
