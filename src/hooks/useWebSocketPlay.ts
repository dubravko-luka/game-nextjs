import { setCardMain } from '@/store/actions/allyAction';
import {
	setCardFour as setCardFourEnemy,
	setCardMain as setCardMainEnemy,
	setCardOne as setCardOneEnemy,
	setCardThree as setCardThreeEnemy,
	setCardTwo as setCardTwoEnemy,
} from '@/store/actions/enemyAction';
import {
	setCardAttack,
	setCardDefense,
	setIsAttack,
	setYourTurn,
	setTurnEnemy,
	setReady,
} from '@/store/actions/attackDefenseAction';
import { RootState } from '@/store/types';
import { cardMainDefault } from '@/types';
import { stringFromWebsocket } from '@/utils/websocket';
import { useDispatch, useSelector } from 'react-redux';

const W3CWebSocket = require('websocket').w3cwebsocket;
const client = new W3CWebSocket(`${process.env.NEXT_PUBLIC_SOCKET_URL}?path=play&room=123`, 'echo-protocol');

export const useWebSocket = () => {
	const sendMessage = async (type: any) => {
		if (client.readyState === client.OPEN) {
			client.send(type.toString());
		}
	};

	return {
		sendMessage,
	};
};

export function useWebSocketInit() {
	const dispatch = useDispatch();
	const { ready } = useSelector((state: RootState) => state?.attackDefense);

	client.onerror = function () {
		console.log('Connection Error');
	};

	client.onopen = function () {
		console.log('Connected');
	};

	client.onclose = function () {
		console.log('Client Closed');
	};

	client.onmessage = async function (e: any) {
		console.log('------->', e.data);
		if (e.data === 'Enemy turn') {
			dispatch(setYourTurn(false));
			dispatch(setCardMain(cardMainDefault[2]));

			dispatch(setTurnEnemy(true));
			dispatch(setCardMainEnemy(cardMainDefault[1]));

			if (ready.length < 2) {
				dispatch(setReady([...ready, true]));
			}
		} else if (e.data === 'Your turn') {
			dispatch(setYourTurn(true));
			dispatch(setCardMain(cardMainDefault[1]));

			dispatch(setTurnEnemy(false));
			dispatch(setCardMainEnemy(cardMainDefault[2]));

			if (ready.length < 2) {
				dispatch(setReady([...ready, true]));
			}
		} else {
			const res = await stringFromWebsocket(e.data);
			if (res.turn && res.turn === 'reverse-turn') {
				dispatch(setYourTurn(res.yourTurn));
				dispatch(setTurnEnemy(res.enemyTurn));
			} else if (res.turn && res.turn === 'change-card') {
				dispatch(
					setCardOneEnemy({
						...res.card_1,
						id: '0',
					}),
				);
				dispatch(
					setCardTwoEnemy({
						...res.card_2,
						id: '1',
					}),
				);
				dispatch(
					setCardThreeEnemy({
						...res.card_3,
						id: '2',
					}),
				);
				dispatch(
					setCardFourEnemy({
						...res.card_4,
						id: '3',
					}),
				);
			} else {
				dispatch(setCardAttack(res.card_attack));
				dispatch(setCardDefense(res.card_defense));
				dispatch(setIsAttack(false));
			}
		}
	};
}
