import { SCREEN_ENUM } from '@/types/enum';
import { SET_SCREEN, ScreenAction, ScreenState } from '../types/screenTypes';

const initialState: ScreenState = {
	screen: SCREEN_ENUM.PVP,
};

const screenReducer = (state = initialState, action: ScreenAction): ScreenState => {
	switch (action.type) {
		case SET_SCREEN:
			return {
				...state,
				screen: action?.payload,
			};
		default:
			return state;
	}
};

export default screenReducer;
