import { CARD_ENUM_TAB } from '@/types/enum';
import { SET_TAB_CARD } from '../types/cardTypes';

export const setTab = (tab: CARD_ENUM_TAB) => {
	return {
		type: SET_TAB_CARD,
		payload: tab,
	};
};
