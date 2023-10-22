import { SHOP_ENUM_TAB } from '@/types/enum';
import { SET_TAB_SHOP } from '../types/shopTypes';

export const setTab = (tab: SHOP_ENUM_TAB) => {
	return {
		type: SET_TAB_SHOP,
		payload: tab,
	};
};
