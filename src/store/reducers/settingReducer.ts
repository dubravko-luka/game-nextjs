import { SettingAction, SettingState, SET_SHOW_SETTING } from '../types/settingTypes';

const initialState: SettingState = {
	show: false,
};

const settingReducer = (state = initialState, action: SettingAction): SettingState => {
	switch (action.type) {
		case SET_SHOW_SETTING:
			return {
				...state,
				show: action?.payload,
			};
		default:
			return state;
	}
};

export default settingReducer;
