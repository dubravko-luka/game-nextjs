import {
	EnemyAction,
	EnemyState,
	RESET_ENEMY,
	SET_ENEMY_CARD_1,
	SET_ENEMY_CARD_2,
	SET_ENEMY_CARD_3,
	SET_ENEMY_CARD_4,
	SET_ENEMY_CARD_MAIN,
	SET_MANA_ENEMY,
} from '../types/enemyTypes';
import { cardDefault, cardMainDefault } from '@/types';

const initialState: EnemyState = {
	card_1: cardDefault[0],
	card_2: cardDefault[0],
	card_3: cardDefault[0],
	card_4: cardDefault[0],
	card_main: cardMainDefault[0],
	mana: 1,
};

const enemyReducer = (state = initialState, action: EnemyAction): EnemyState => {
	switch (action.type) {
		case SET_ENEMY_CARD_1:
			return {
				...state,
				card_1: action?.payload,
			};
		case SET_ENEMY_CARD_2:
			return {
				...state,
				card_2: action?.payload,
			};
		case SET_ENEMY_CARD_3:
			return {
				...state,
				card_3: action?.payload,
			};
		case SET_ENEMY_CARD_4:
			return {
				...state,
				card_4: action?.payload,
			};
		case SET_ENEMY_CARD_MAIN:
			return {
				...state,
				card_main: action?.payload,
			};
		case SET_MANA_ENEMY:
			return {
				...state,
				mana: action?.payload,
			};
		case RESET_ENEMY:
			return {
				card_1: cardDefault[0],
				card_2: cardDefault[0],
				card_3: cardDefault[0],
				card_4: cardDefault[0],
				card_main: cardMainDefault[0],
				mana: 1
			};
		default:
			return state;
	}
};

export default enemyReducer;
