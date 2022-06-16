import { cardActionTypes } from "./actions";

const initialState = {
	card: {
		title: "New world",
		description: "Here will be description soon",
		isOpen: true,
	},
};

export const cardReducer = (state = initialState, action) => {
	switch (action.type) {
		case cardActionTypes.SET_CARD:
			return { ...state, card: action.payload };
		default:
			return state;
	}
};
