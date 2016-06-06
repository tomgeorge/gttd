import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';

import { Todo, TodoBuilder } from '../../../main/app/todo/todo.builder';

describe('TodoBuilder', () => {

  const defaultTodo: Todo = new TodoBuilder().build();

  it('should have default settings',  () => {
      expect(defaultTodo.id).toBe(1);
      expect(defaultTodo.description).toBe('Default');
      expect(defaultTodo.inProgress).toBe(false);
  });

  it('should be able to specify options', () => {
      expect(new TodoBuilder()
      .setId(5)
      .build().id).toBe(5);

      expect(new TodoBuilder()
      .setDescription('build an api server')
      .build().description).toBe('build an api server');
  });
});
