import { createStore, combineReducers } from 'redux';
import * as appReducers from './ducks';

const reducer = combineReducers({ ...appReducers });

export default createStore(reducer);
