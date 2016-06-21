import * as Redux from 'redux';
const { combineReducers } = Redux;
import { ITodos, todosReducer } from './todos';

export interface IAppState {
  todos?: ITodos;
};

const rootReducer = combineReducers<IAppState>({
    todos: todosReducer
});

export default rootReducer;