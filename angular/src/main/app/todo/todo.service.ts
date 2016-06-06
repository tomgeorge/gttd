import {Injectable} from '@angular/core';
import {Todo} from './todo';
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
}