// Reduces

export const count = (state = 0, action = {}) => {
    const {type, payload} = action;
    switch (type) {
        case "INCREASE": {
            console.log(payload);
            return state + 1;
        }

        case "DECREASE": {
            console.log(payload);
            return state - 1;
        }

        default: return state;
    }
};
