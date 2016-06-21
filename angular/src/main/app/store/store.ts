import * as Redux from 'redux';
import { ITodos } from '../reducers/todos';
const {combineReducers, createStore, applyMiddleware, compose } = Redux;
import reducer from '../reducers/index';
const logger = require('redux-logger').createLogger;

export const enhancers: any = [];

if (window.devToolsExtension) {
  enhancers.push(window.devToolsExtension());
}

export interface IAppState {
  todos?: ITodos;
}
