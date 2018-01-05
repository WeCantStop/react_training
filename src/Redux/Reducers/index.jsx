// Reduces

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
