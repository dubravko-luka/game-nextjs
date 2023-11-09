import { ICardMainPlaying, ICardPlaying } from '@/types/interfaces';
import {
	RESET_ENEMY,
	SET_ENEMY_CARD_1,
	SET_ENEMY_CARD_2,
	SET_ENEMY_CARD_3,
	SET_ENEMY_CARD_4,
	SET_ENEMY_CARD_MAIN,
	SET_MANA_ENEMY,
} from '../types/enemyTypes';

export const setCardOne = (card: ICardPlaying) => {
	return {
		type: SET_ENEMY_CARD_1,
		payload: card,
	};
};

export const setCardTwo = (card: ICardPlaying) => {
	return {
		type: SET_ENEMY_CARD_2,
		payload: card,
	};
};

export const setCardThree = (card: ICardPlaying) => {
	return {
		type: SET_ENEMY_CARD_3,
		payload: card,
	};
};

export const setCardFour = (card: ICardPlaying) => {
	return {
		type: SET_ENEMY_CARD_4,
		payload: card,
	};
};

export const setCardMain = (card: ICardMainPlaying) => {
	return {
		type: SET_ENEMY_CARD_MAIN,
		payload: card,
	};
};

export const resetEnemy = () => {
	return {
		type: RESET_ENEMY,
	};
}

export const setManaEnemy = (mana: number) => {
	return {
		type: SET_MANA_ENEMY,
		payload: mana
	};
}