import { KNAPSACK_ENUM_TAB } from '@/types/enum';
import { SET_TAB_KNAPSACK } from '../types/knapsackTypes';

export const setTab = (tab: KNAPSACK_ENUM_TAB) => {
  return {
    type: SET_TAB_KNAPSACK,
    payload: tab
  };
};