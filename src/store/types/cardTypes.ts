import { CARD_ENUM_TAB } from "@/types/enum";

export const SET_TAB_CARD = 'SET_TAB_CARD';

export interface CardState {
  tab: CARD_ENUM_TAB;
}

interface setCardAction {
  type: typeof SET_TAB_CARD;
  payload: CARD_ENUM_TAB;
}

export type CardAction = setCardAction;
