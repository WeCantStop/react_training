// Store
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { count, todoList } from './reducers';

const reducers = combineReducers({
    count,
    todoList
});

export const store = createStore(reducers);
