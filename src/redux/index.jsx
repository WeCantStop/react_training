// Store
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { count, todoList } from './reducers'
import DevTools from '../components/devTools'

const reducers = combineReducers({
    count,
    todoList
});

const enhancer = compose(
    DevTools.instrument()
);

export const store = createStore(reducers, enhancer);
