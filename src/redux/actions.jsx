// Actions
import * as actionTypes from './actionTypes';

export const increaseNumber = (number) => {
	return {
		type: actionTypes.INCREASE_NUMBER,
		number
	};
};

export const decreaseNumber = number => {
	return {
		type: actionTypes.DECREASE_NUMBER,
		number
	};
};

export const addThing = thing => {
	return {
		type: actionTypes.ADD_THING,
		thing
	};
};

export const removeThing = thing => {
	return {
		type: actionTypes.REMOVE_THING,
		thing
	};
};