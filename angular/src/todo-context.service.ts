import { Injectable } from 'angular2/core';
import { TodoContext } from './todo-context';
import { CONTEXTS } from './mock-contexts';

@Injectable()
export class TodoContextService {
    getTodoContexts() {
        return Promise.resolve(CONTEXTS);
    }
}
