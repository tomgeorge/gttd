import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';

import { TodoService } from '../../../main/app/todo/todo.service';
import { Todo, TodoBuilder } from '../../../main/app/todo/todo.builder';
import {TODOS} from '../../../main/app/todo/mock-todos';


describe('Todo Service', () => {
  let newTodo = new TodoBuilder().build();
  let serviceTodos: Todo[] = [];

  let todosAfter: Todo[] = [
      ...TODOS,
      newTodo
      ];
  beforeEachProviders(() => [TodoService]);

  it('should add a todo to the list', inject([TodoService], (service: TodoService) => {
    service.addTodo(newTodo);

    console.log('servicetodos' + serviceTodos.map(t=>t.name));
    expect(serviceTodos).toBe(todosAfter);
  }));

  it('should be two', () => {
    expect(2).toBe(2);
  });
});
