// Store
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { count } from '../Reducers/';

const reducer = combineReducers({
    number: count
});

export const store = createStore(count);
