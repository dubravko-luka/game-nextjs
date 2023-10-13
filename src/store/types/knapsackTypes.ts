import { KNAPSACK_ENUM_TAB } from "@/types/enum";

export const SET_TAB_KNAPSACK = 'SET_TAB_KNAPSACK';

export interface KnapsackState {
  tab: KNAPSACK_ENUM_TAB;
}

interface setKnapsackAction {
  type: typeof SET_TAB_KNAPSACK;
  payload: KNAPSACK_ENUM_TAB;
}

export type KnapsackAction = setKnapsackAction;
