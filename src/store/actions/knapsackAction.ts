import { KNAPSACK_ENUM_TAB } from '@/types/enum';
import { SET_TAB } from '../types/knapsackTypes';

export const setTab = (tab: KNAPSACK_ENUM_TAB) => {
  return {
    type: SET_TAB,
    payload: tab
  };
};