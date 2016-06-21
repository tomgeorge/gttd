import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';

import { TodoBuilder } from '../../../main/app/todo/todo.builder';
import { IAppState }  from '../../../main/app/store/store';



describe('Root State', () => {
  
  it('should have an initial state',  () => {
      console.log(`IAppState state ${this.IAppState.getState()}`);
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
