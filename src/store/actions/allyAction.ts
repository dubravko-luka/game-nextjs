import { ICardMainPlaying, ICardPlaying } from '@/types/interfaces';
import {
	RESET_ALLY,
	SET_ALLY_CARD_1,
	SET_ALLY_CARD_2,
	SET_ALLY_CARD_3,
	SET_ALLY_CARD_4,
	SET_ALLY_CARD_INDEX_SELECTED,
	SET_ALLY_CARD_MAIN,
	SET_ALLY_CARD_RESERVE,
	SET_ALLY_CARD_RESERVE_SELECTED,
	SET_ALLY_CARD_RESERVE_TARGET_SELECTED,
	SET_ALLY_CARD_TARGET_SELECTED,
	SET_MANA_ALLY,
} from '../types/allyTypes';

export const setCardOne = (card: ICardPlaying) => {
	return {
		type: SET_ALLY_CARD_1,
		payload: card,
	};
};

export const setCardTwo = (card: ICardPlaying) => {
	return {
		type: SET_ALLY_CARD_2,
		payload: card,
	};
};

export const setCardThree = (card: ICardPlaying) => {
	return {
		type: SET_ALLY_CARD_3,
		payload: card,
	};
};

export const setCardFour = (card: ICardPlaying) => {
	return {
		type: SET_ALLY_CARD_4,
		payload: card,
	};
};

export const setCardMain = (card: ICardMainPlaying) => {
	return {
		type: SET_ALLY_CARD_MAIN,
		payload: card,
	};
};

export const setCardIndexSelected = (index: number) => {
	return {
		type: SET_ALLY_CARD_INDEX_SELECTED,
		payload: index,
	};
};

export const setCardTargetSelected = (index: number) => {
	return {
		type: SET_ALLY_CARD_TARGET_SELECTED,
		payload: index,
	};
};

export const setCardReserveSelected = (index: number) => {
	return {
		type: SET_ALLY_CARD_RESERVE_SELECTED,
		payload: index,
	};
};

export const setCardReserveTargetSelected = (index: number) => {
	return {
		type: SET_ALLY_CARD_RESERVE_TARGET_SELECTED,
		payload: index,
	};
};

export const setCardReserve = (card: ICardPlaying[]) => {
	return {
		type: SET_ALLY_CARD_RESERVE,
		payload: card,
	};
};

export const resetAlly = () => {
	return {
		type: RESET_ALLY,
	};
};

export const setManaAlly = (mana: number) => {
	return {
		type: SET_MANA_ALLY,
		payload: mana,
	};
};
