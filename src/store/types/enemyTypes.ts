import { ICardMainPlaying, ICardPlaying } from "@/types/interfaces";

export const SET_ENEMY_CARD_1 = 'SET_ENEMY_CARD_1';
export const SET_ENEMY_CARD_2 = 'SET_ENEMY_CARD_2';
export const SET_ENEMY_CARD_3 = 'SET_ENEMY_CARD_3';
export const SET_ENEMY_CARD_4 = 'SET_ENEMY_CARD_4';
export const SET_ENEMY_CARD_MAIN = 'SET_ENEMY_CARD_MAIN';

export interface EnemyState {
  card_1: ICardPlaying;
  card_2: ICardPlaying;
  card_3: ICardPlaying;
  card_4: ICardPlaying;
  card_main: ICardMainPlaying;
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

export type EnemyAction = setCardOneAction | setCardTwoAction | setCardThreeAction | setCardFourAction | setCardMainAction;
