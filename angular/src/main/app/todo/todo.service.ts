import {Injectable} from '@angular/core';
import {Todo} from './todo.builder';
import {TODOS} from './mock-todos';

@Injectable()
export class TodoService {
    getTodos() {
        return Promise.resolve(TODOS);
    }
    getTodosSlowly() {
        return new Promise<Todo[]>(resolve =>
            setTimeout(() => resolve(TODOS), 2000)
        );
    }
    addTodo(todo: Todo) {
        TODOS.concat(todo);
    }
}
