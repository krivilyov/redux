export const cardActionTypes = {
	SET_CARD: "CARD.SET_CARD",
};

export const cardActions = {
	setCard: (payload) => ({ type: cardActionTypes.SET_CARD, payload }),
};
