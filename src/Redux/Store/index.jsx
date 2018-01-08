// Store
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { count } from '../Reducers/';


export const store = createStore(
    count
);
