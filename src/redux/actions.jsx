// Actions
export const INCREASE_NUMBER = "INCREASE_NUMBER"
export const DECREASE_NUMBER = "DECREASE_NUMBER"

export const increaseNumber = (number) => {
    return {
        type: INCREASE_NUMBER,
        number
    }
};

export const decreaseNumber = number => {
    return {
        type: DECREASE_NUMBER,
        number
    }
};

export const ADD_THING = "ADD_THING"
export const REMOVE_THING = "REMOVE_THING"

export const addThing = thing => {
    return {
        type: ADD_THING,
        thing
    }
}

export const removeThing = thing => {
    return {
        type: REMOVE_THING,
        thing
    }
}