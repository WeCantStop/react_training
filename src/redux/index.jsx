// Store
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { count } from './reducers';

// const reducer = combineReducers({
//     number: count
// });

export const store = createStore(count);
