export const INCREASE_NUMBER = "INCREASE_NUMBER";
export const DECREASE_NUMBER = "DECREASE_NUMBER";

export const increaseNumber = number => {
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