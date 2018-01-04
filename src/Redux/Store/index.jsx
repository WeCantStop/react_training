import {createStore, combineReducers, applyMiddleware} from 'redux';
import {count} from '../Reducers/index.jsx';


export const store = createStore(
    count
);


