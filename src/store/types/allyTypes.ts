import { ICardMainPlaying, ICardPlaying } from '@/types/interfaces';

export const SET_ALLY_CARD_1 = 'SET_ALLY_CARD_1';
export const SET_ALLY_CARD_2 = 'SET_ALLY_CARD_2';
export const SET_ALLY_CARD_3 = 'SET_ALLY_CARD_3';
export const SET_ALLY_CARD_4 = 'SET_ALLY_CARD_4';
export const SET_ALLY_CARD_MAIN = 'SET_ALLY_CARD_MAIN';
export const SET_ALLY_CARD_INDEX_SELECTED = 'SET_ALLY_CARD_INDEX_SELECTED';
export const SET_ALLY_CARD_TARGET_SELECTED = 'SET_ALLY_CARD_TARGET_SELECTED';
export const SET_ALLY_CARD_RESERVE_SELECTED = 'SET_ALLY_CARD_RESERVE_SELECTED';
export const SET_ALLY_CARD_RESERVE_TARGET_SELECTED = 'SET_ALLY_CARD_RESERVE_TARGET_SELECTED';
export const SET_ALLY_CARD_RESERVE = 'SET_ALLY_CARD_RESERVE';
export const RESET_ALLY = 'RESET_ALLY';
export const SET_MANA_ALLY = 'SET_MANA_ALLY';

export interface AllyState {
	card_1: ICardPlaying;
	card_2: ICardPlaying;
	card_3: ICardPlaying;
	card_4: ICardPlaying;
	card_main: ICardMainPlaying;
	card_selected: number;
	card_target_selected: number;
	card_reserve_selected: number;

	card_reserve_target: number;
	card_reserve: ICardPlaying[];
	mana: number
}

interface setCardOneAction {
	type: typeof SET_ALLY_CARD_1;
	payload: ICardPlaying;
}

interface setCardTwoAction {
	type: typeof SET_ALLY_CARD_2;
	payload: ICardPlaying;
}

interface setCardThreeAction {
	type: typeof SET_ALLY_CARD_3;
	payload: ICardPlaying;
}

interface setCardFourAction {
	type: typeof SET_ALLY_CARD_4;
	payload: ICardPlaying;
}

interface setCardMainAction {
	type: typeof SET_ALLY_CARD_MAIN;
	payload: ICardMainPlaying;
}

interface setCardIndexSelectedAction {
	type: typeof SET_ALLY_CARD_INDEX_SELECTED;
	payload: number;
}

interface setCardTargetSelectedAction {
	type: typeof SET_ALLY_CARD_TARGET_SELECTED;
	payload: number;
}

interface setCardReserveSelectedAction {
	type: typeof SET_ALLY_CARD_RESERVE_SELECTED;
	payload: number;
}

interface setCardReserveTargetSelectedAction {
	type: typeof SET_ALLY_CARD_RESERVE_TARGET_SELECTED;
	payload: number;
}

interface setCardReserveAction {
	type: typeof SET_ALLY_CARD_RESERVE;
	payload: ICardPlaying[];
}

interface setManaAction {
	type: typeof SET_MANA_ALLY;
	payload: number;
}

interface resetAlly {
	type: typeof RESET_ALLY;
}

export type AllyAction =
	| setCardOneAction
	| setCardTwoAction
	| setCardThreeAction
	| setCardFourAction
	| setCardMainAction
	| setCardIndexSelectedAction
	| setCardTargetSelectedAction
	| setCardReserveSelectedAction
	| setCardReserveTargetSelectedAction
	| setCardReserveAction
	| resetAlly
	| setManaAction;
