// Store
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { count } from './reducers';

const reducers = combineReducers({
    count
});

export const store = createStore(reducers);
