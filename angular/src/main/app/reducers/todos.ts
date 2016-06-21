import { TodosActions } from '../actions/todos-actions';
import { Todo, TodoBuilder } from '../todo/todo.builder';
import * as Redux from 'redux';
import { Map, fromJS } from 'immutable';


const INITIAL_STATE = fromJS({
  todos: []
});

export type ITodos = Map<string, Todo[]>;

export function todosReducer(
  state: ITodos = INITIAL_STATE,
  action = { type: '' }) {
  switch (action.type) {
    case TodosActions.ADD_TODO:
      console.log('create todo');
      break;
    case TodosActions.REMOVE_TODO:
      console.log('remove todo');
    default:
      return state;
  }
}
