import { KNAPSACK_ENUM_TAB } from "@/types/enum";

export const SET_TAB = 'SET_TAB';

export interface KnapsackState {
  tab: KNAPSACK_ENUM_TAB;
}

interface setKnapsackAction {
  type: typeof SET_TAB;
  payload: KNAPSACK_ENUM_TAB;
}

export type KnapsackAction = setKnapsackAction;
