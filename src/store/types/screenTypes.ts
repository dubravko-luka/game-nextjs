import { SCREEN_ENUM } from "@/types/enum";

export const SET_SCREEN = 'SET_SCREEN';

export interface ScreenState {
  screen: SCREEN_ENUM;
}

interface setScreenAction {
  type: typeof SET_SCREEN;
  payload: SCREEN_ENUM;
}

export type ScreenAction = setScreenAction;
