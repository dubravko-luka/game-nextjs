import { CARD_ENUM_TAB } from "@/types/enum";

export const SET_TAB = 'SET_TAB';

export interface CardState {
  tab: CARD_ENUM_TAB;
}

interface setCardAction {
  type: typeof SET_TAB;
  payload: CARD_ENUM_TAB;
}

export type CardAction = setCardAction;
