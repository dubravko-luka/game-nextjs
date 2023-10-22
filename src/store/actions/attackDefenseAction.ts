import { ICardPlaying } from '@/types/interfaces';
import { SET_CARD_ATTACK, SET_CARD_DEFENSE, SET_DELAY_SKILL, SET_IS_ATTACK } from '../types/attackDefenseTypes';

export const setCardAttack = (card: ICardPlaying) => {
	return {
		type: SET_CARD_ATTACK,
		payload: card,
	};
};

export const setCardDefense = (card: ICardPlaying) => {
	return {
		type: SET_CARD_DEFENSE,
		payload: card,
	};
};

export const setIsAttack = (isAttack: boolean) => {
	return {
		type: SET_IS_ATTACK,
		payload: isAttack,
	};
};

export const setDelaySkill = (delay: number) => {
	return {
		type: SET_DELAY_SKILL,
		payload: delay,
	};
};
