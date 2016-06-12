import * as Redux from 'redux';
import { Todo } from '../todo/todo.builder';
const {createStore, applyMiddleware, compose } = Redux;
const thunk = require('redux-thunk').default;
import reducer from '../reducers/index';

export const enhancers: any = [];

if (window.devToolsExtension) {
  enhancers.push(window.devToolsExtension());
}

export interface RootState {
  todos: Todo[];
}

const finalCreateStore = <Redux.StoreEnhancerStoreCreator<RootState>>compose(
  applyMiddleware(thunk),
  ...enhancers
)(createStore);

export default () => {
  return finalCreateStore(reducer, {todos: []} as RootState);
}
