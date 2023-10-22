export const SET_SHOW_SETTING = 'SET_SHOW_SETTING';

export interface SettingState {
	show: boolean;
}

interface setShowSettingAction {
	type: typeof SET_SHOW_SETTING;
	payload: boolean;
}

export type SettingAction = setShowSettingAction;
