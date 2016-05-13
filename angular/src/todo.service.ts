import {Injectable} from 'angular2/core';
import {Todo} from './todo';
import {TODOS} from './mock-todos';

@Injectable()
export class TodoService {
    getTodoes() {
        return Promise.resolve(TODOS);
    }
    getTodoesSlowly() {
        return new Promise<Todo[]>(resolve =>
            setTimeout(()=>resolve(TODOS), 2000)
        );
    }
}
