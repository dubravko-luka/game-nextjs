import { RootState } from '@/store/types';
import { useSelector } from 'react-redux';

export function useWebSocket() {
	const { client } = useSelector((state: RootState) => state?.webSocket);

	const sendMessage = async (message: any) => {
		if (client && client.readyState === client.OPEN) {
			client.send(message.toString());
		}
	};

	const sendMessageWidthClient = async (client: any, message: any) => {
		if (client && client.readyState === client.OPEN) {
			client.send(message.toString());
		}
	};

	const surrender = async () => {
		client.close();
	};

	return {
		sendMessage,
		surrender,
		sendMessageWidthClient,
	};
}
