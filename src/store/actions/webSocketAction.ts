import { RESET_WEBSOCKET, SET_CLIENT } from '../types/webSocketTypes';

export const setClient = (client: any) => {
	return {
		type: SET_CLIENT,
		payload: client,
	};
};

export const resetWebSocket = () => {
	return {
		type: RESET_WEBSOCKET,
	};
};
