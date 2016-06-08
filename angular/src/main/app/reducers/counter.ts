import { bindActionCreators } from 'redux';

import * as Redux from 'redux';
const { combineReducers } = Redux;
import { RootState } from '../store/configureStore';
import counter from './counter';

const rootReducer: any = combineReducers<RootState>({
  counter
});

export default rootReducer;

