export const SET_CLIENT = 'SET_CLIENT';
export const RESET_WEBSOCKET = 'RESET_WEBSOCKET';

export interface WebSocketState {
	client: any;
}

interface setWebSocketClientAction {
	type: typeof SET_CLIENT;
	payload: any;
}

interface resetWebSocket {
	type: typeof RESET_WEBSOCKET;
}

export type WebSocketAction = setWebSocketClientAction | resetWebSocket;
