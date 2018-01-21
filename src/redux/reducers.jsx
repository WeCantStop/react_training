// Reduces

// 计数器
export const count = (state = 0, action = {}) => {
    switch (action.type) {
        case "INCREASE_NUMBER": {
            return state + action.number;
        }

        case "DECREASE_NUMBER": {
            return state - action.number;
        }

        default: return state;
    }
};

// Todo List
const initTodoThings = {
    todoList: []
}
export const todoList = (state = initTodoThings, action = {}) => {
    switch (action.type) {
        case 'ADD_THING': {
            state.todoList.push({thing: action.thing});
            return Object.assign({}, state);
            // return Object.assign(state, ...action.thing)
            // return ['test'];
        }

        case 'REMOVE_THING': {
            
        }
        
        default: return state;
    }
}
