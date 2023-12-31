import { KNAPSACK_ENUM_TAB } from '@/types/enum';
import { SET_TAB_KNAPSACK, KnapsackAction, KnapsackState } from '../types/knapsackTypes';

const initialState: KnapsackState = {
	tab: KNAPSACK_ENUM_TAB.ALL,
};

const knapsackReducer = (state = initialState, action: KnapsackAction): KnapsackState => {
	switch (action.type) {
		case SET_TAB_KNAPSACK:
			return {
				...state,
				tab: action?.payload,
			};
		default:
			return state;
	}
};

export default knapsackReducer;
