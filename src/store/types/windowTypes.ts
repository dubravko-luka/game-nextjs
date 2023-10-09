export const SET_WIDTH = 'SET_WIDTH';
export const SET_HEIGHT = 'SET_HEIGHT';

export interface WindowState {
  width: number;
  height: number;
}

interface setWindowWidthAction {
  type: typeof SET_WIDTH;
  payload: number;
}

interface setWindowHeightAction {
  type: typeof SET_HEIGHT;
  payload: number;
}

export type WindowAction = setWindowWidthAction | setWindowHeightAction;
