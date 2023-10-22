import { SCREEN_ENUM } from '@/types/enum';
import { SET_SCREEN } from '../types/screenTypes';

export const setScreen = (screen: SCREEN_ENUM) => {
	return {
		type: SET_SCREEN,
		payload: screen,
	};
};
