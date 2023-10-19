import { AllyAction, AllyState, SET_ALLY_CARD_1, SET_ALLY_CARD_2, SET_ALLY_CARD_3, SET_ALLY_CARD_4, SET_ALLY_CARD_INDEX_SELECTED, SET_ALLY_CARD_MAIN, SET_ALLY_CARD_TARGET_SELECTED } from "../types/allyTypes";
import { cardDefault, cardMainDefault } from "@/types";

const initialState: AllyState = {
  card_1: cardDefault[0],
  card_2: cardDefault[0],
  card_3: cardDefault[0],
  card_4: cardDefault[0],
  card_main: cardMainDefault[0],
  card_selected: -1,
  card_target_selected: [-1, -1]
};

const allyReducer = (state = initialState, action: AllyAction): AllyState => {
  switch (action.type) {
    case SET_ALLY_CARD_1:
      return {
        ...state,
        card_1: action?.payload,
      };
    case SET_ALLY_CARD_2:
      return {
        ...state,
        card_2: action?.payload,
      };
    case SET_ALLY_CARD_3:
      return {
        ...state,
        card_3: action?.payload,
      };
    case SET_ALLY_CARD_4:
      return {
        ...state,
        card_4: action?.payload,
      };
    case SET_ALLY_CARD_MAIN:
      return {
        ...state,
        card_main: action?.payload,
      };
    case SET_ALLY_CARD_INDEX_SELECTED:
      return {
        ...state,
        card_selected: action?.payload,
      };
    case SET_ALLY_CARD_TARGET_SELECTED:
      return {
        ...state,
        card_target_selected: action?.payload,
      };
    default:
      return state;
  }
};

export default allyReducer;
