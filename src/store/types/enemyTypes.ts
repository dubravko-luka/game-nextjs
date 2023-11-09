import { ICardMainPlaying, ICardPlaying } from '@/types/interfaces';

export const SET_ENEMY_CARD_1 = 'SET_ENEMY_CARD_1';
export const SET_ENEMY_CARD_2 = 'SET_ENEMY_CARD_2';
export const SET_ENEMY_CARD_3 = 'SET_ENEMY_CARD_3';
export const SET_ENEMY_CARD_4 = 'SET_ENEMY_CARD_4';
export const SET_ENEMY_CARD_MAIN = 'SET_ENEMY_CARD_MAIN';
export const RESET_ENEMY = 'RESET_ENEMY';
export const SET_MANA_ENEMY = 'SET_MANA_ENEMY';

export interface EnemyState {
	card_1: ICardPlaying;
	card_2: ICardPlaying;
	card_3: ICardPlaying;
	card_4: ICardPlaying;
	card_main: ICardMainPlaying;
	mana: number;
}

interface setCardOneAction {
	type: typeof SET_ENEMY_CARD_1;
	payload: ICardPlaying;
}

interface setCardTwoAction {
	type: typeof SET_ENEMY_CARD_2;
	payload: ICardPlaying;
}

interface setCardThreeAction {
	type: typeof SET_ENEMY_CARD_3;
	payload: ICardPlaying;
}

interface setCardFourAction {
	type: typeof SET_ENEMY_CARD_4;
	payload: ICardPlaying;
}

interface setCardMainAction {
	type: typeof SET_ENEMY_CARD_MAIN;
	payload: ICardMainPlaying;
}

interface setManaAction {
	type: typeof SET_MANA_ENEMY;
	payload: number;
}

interface resetEnemy {
	type: typeof RESET_ENEMY;
}

export type EnemyAction =
	| setCardOneAction
	| setCardTwoAction
	| setCardThreeAction
	| setCardFourAction
	| setCardMainAction
	| resetEnemy
	| setManaAction;
