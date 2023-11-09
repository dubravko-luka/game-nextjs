import { WebSocketAction, WebSocketState, SET_CLIENT, RESET_WEBSOCKET } from '../types/webSocketTypes';

const initialState: WebSocketState = {
	client: null,
};

const webSocketReducer = (state = initialState, action: WebSocketAction): WebSocketState => {
	switch (action.type) {
		case SET_CLIENT:
			return {
				...state,
				client: action?.payload,
			};
		case RESET_WEBSOCKET:
			return {
				client: null,
			};
		default:
			return state;
	}
};

export default webSocketReducer;
