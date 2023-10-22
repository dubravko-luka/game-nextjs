import { CARD_ENUM_TAB } from '@/types/enum';
import { SET_TAB_CARD, CardAction, CardState } from '../types/cardTypes';

const initialState: CardState = {
	tab: CARD_ENUM_TAB.ALL,
};

const cardReducer = (state = initialState, action: CardAction): CardState => {
	switch (action.type) {
		case SET_TAB_CARD:
			return {
				...state,
				tab: action?.payload,
			};
		default:
			return state;
	}
};

export default cardReducer;
