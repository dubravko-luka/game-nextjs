import {
	AttackDefenseAction,
	AttackDefenseState,
	SET_CARD_ATTACK,
	SET_CARD_DEFENSE,
	SET_DELAY_SKILL,
	SET_IS_ATTACK,
} from '../types/attackDefenseTypes';
import { cardDefault } from '@/types';

const initialState: AttackDefenseState = {
	card_attack: cardDefault[0],
	card_defense: cardDefault[0],
	isAttack: true,
	delaySkill: 70,
};

const attackDefenseReducer = (state = initialState, action: AttackDefenseAction): AttackDefenseState => {
	switch (action.type) {
		case SET_CARD_ATTACK:
			return {
				...state,
				card_attack: action?.payload,
			};
		case SET_CARD_DEFENSE:
			return {
				...state,
				card_defense: action?.payload,
			};
		case SET_IS_ATTACK:
			return {
				...state,
				isAttack: action?.payload,
			};
		case SET_DELAY_SKILL:
			return {
				...state,
				delaySkill: action?.payload,
			};
		default:
			return state;
	}
};

export default attackDefenseReducer;
