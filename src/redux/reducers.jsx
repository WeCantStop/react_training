// Reduces
import * as actionTypes from './actionTypes'

// 计数器
export const count = (state = 0, action = {}) => {
    switch (action.type) {
        case actionTypes.INCREASE_NUMBER:
            return state + action.number;

        case actionTypes.DECREASE_NUMBER:
            return state - action.number;

        default: return state;
    }
};

// Todo List
export const todoList = (state = [], action = {}) => {
    switch (action.type) {
        case actionTypes.ADD_THING:
            return [...state, action.thing];

        case actionTypes.REMOVE_THING:
        
        default:
            return state;
    }
};
