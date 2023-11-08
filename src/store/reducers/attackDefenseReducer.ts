import {
	AttackDefenseAction,
	AttackDefenseState,
	SET_CARD_ATTACK,
	SET_CARD_DEFENSE,
	SET_DELAY_SKILL,
	SET_IS_ATTACK,
	SET_TURN_YOUR,
	SET_TURN_ENEMY,
	SET_READY,
} from '../types/attackDefenseTypes';
import { cardDefault } from '@/types';

const initialState: AttackDefenseState = {
	card_attack: cardDefault[0],
	card_defense: cardDefault[0],
	isAttack: true,
	delaySkill: 70,
	turnYour: false,
	turnEnemy: false,
	ready: [],
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
		case SET_TURN_YOUR:
			return {
				...state,
				turnYour: action?.payload,
			};
		case SET_TURN_ENEMY:
			return {
				...state,
				turnEnemy: action?.payload,
			};
		case SET_READY:
			return {
				...state,
				ready: action?.payload,
			};
		default:
			return state;
	}
};

export default attackDefenseReducer;
