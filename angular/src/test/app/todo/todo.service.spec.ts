import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import { provide } from '@angular/core'
import { TodoService } from '../../../main/app/todo/todo.service';
import { Http, HTTP_PROVIDERS, XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from '../../../main/app/shared/in-memory-data.service';
import { Todo, TodoBuilder } from '../../../main/app/todo/todo.builder';
import { TODOS } from '../../../main/app/todo/mock-todos';
import { ConsoleLogService } from '../../../main/app/shared/console.log.service';


describe('Todo Service', () => {
  let todoService: any;

  beforeEachProviders(() => [
    TodoService,
    HTTP_PROVIDERS,
    ConsoleLogService,
    Http,
    InMemoryDataService,
    provide(XHRBackend, { useClass: InMemoryBackendService }),
    provide(SEED_DATA, { useClass: InMemoryDataService })]);

  let newTodo = new TodoBuilder()
    .setId(8)
    .build();
  let serviceTodos: Todo[];

  let todosAfter: Todo[] = [
    ...TODOS,
    newTodo
  ];


  it('should add a todo to the list', inject([
    TodoService,
    XHRBackend
    ],
    (service: TodoService,
     mockBackend: InMemoryDataService ) => {
      service.getTodos();/*
        .subscribe(
        todos => serviceTodos = todos
        );*/
      service.createTodo(newTodo);

      this.logger.log('servicetodos' + serviceTodos.map(t => t.name));
      expect(serviceTodos).toBe(todosAfter);
    }));

  it('should be two', () => {
    expect(2).toBe(2);
  });
});
