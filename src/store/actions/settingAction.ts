import { SET_SHOW_SETTING } from '../types/settingTypes';

export const setShowSetting = (show: boolean) => {
	return {
		type: SET_SHOW_SETTING,
		payload: show,
	};
};
