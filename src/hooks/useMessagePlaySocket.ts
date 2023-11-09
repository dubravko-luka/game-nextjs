import { resetAlly, setManaAlly, setCardMain } from '@/store/actions/allyAction';
import {
	resetAttackDefense,
	setCardAttack,
	setCardDefense,
	setIsAttack,
	setTurnEnemy,
	setYourTurn,
} from '@/store/actions/attackDefenseAction';
import {
	resetEnemy,
	setCardFour,
	setCardOne,
	setCardThree,
	setCardTwo,
	setManaEnemy,
	setCardMain as setCardMainEnemy,
} from '@/store/actions/enemyAction';
import { setScreen } from '@/store/actions/screenAction';
import { resetWebSocket } from '@/store/actions/webSocketAction';
import { RootState } from '@/store/types';
import { PLAY_ENUM_SOCKET, SCREEN_ENUM } from '@/types/enum';
import { stringFromWebsocket } from '@/utils/websocket';
import { useDispatch, useSelector } from 'react-redux';
import { cardMainDefault } from '@/types';

export function useMessagePlaySocket() {
	const dispatch = useDispatch();
	const { turnYour, turnEnemy } = useSelector((state: RootState) => state?.attackDefense);

	const handleGotoBattle = (res: any) => {
		dispatch(setCardOne(res.card_1));
		dispatch(setCardTwo(res.card_2));
		dispatch(setCardThree(res.card_3));
		dispatch(setCardFour(res.card_4));
		dispatch(setCardMain(res.card_main));
		dispatch(setManaAlly(res.yourMana));
		dispatch(setManaEnemy(res.enemyMana));
	};

	const handleEndTurn = (res: any) => {
		dispatch(setYourTurn(!turnYour));
		dispatch(setTurnEnemy(!turnEnemy));
		dispatch(setManaAlly(res.yourMana + 1));
		dispatch(setManaEnemy(res.enemyMana));
	};

	const handleAttack = (res: any) => {
		dispatch(setIsAttack(false));
		dispatch(setCardAttack(res.card_attack));
		dispatch(setCardDefense(res.card_defense));
	};

	const handleClose = () => {
		dispatch(setScreen(SCREEN_ENUM.PVP));
		dispatch(resetAlly());
		dispatch(resetEnemy());
		dispatch(resetAttackDefense());
		dispatch(resetWebSocket());
	};

	const handleStart = () => {
		dispatch(setScreen(SCREEN_ENUM.PLAY_PVP));
	};

	const handleJoin = (res: any) => {
		handleStart();
		console.log('------->', res);
		if (res.action === PLAY_ENUM_SOCKET.CREATE) {
			/**
			 * SET TURN
			 * If you're the room creator, the first turn goes to you
			 */
			dispatch(setYourTurn(true));
			dispatch(setTurnEnemy(false));
			dispatch(setCardMain(cardMainDefault[1]));
			dispatch(setCardMainEnemy(cardMainDefault[2]));
			dispatch(setManaAlly(1));
			dispatch(setManaEnemy(0));
		} else {
			/**
			 * SET TURN
			 * If you're the room join, the seccond turn goes to you
			 */
			dispatch(setYourTurn(false));
			dispatch(setTurnEnemy(true));
			dispatch(setCardMain(cardMainDefault[2]));
			dispatch(setCardMainEnemy(cardMainDefault[1]));
			dispatch(setManaAlly(0));
			dispatch(setManaEnemy(1));

			/**
			 * START GAME
			 */
			dispatch(setScreen(SCREEN_ENUM.PLAY_PVP));
		}
	};

	const handlMessagePlaySocket = async (message: any) => {
		const res = await stringFromWebsocket(message.data);

		console.log('------->', res);

		switch (res.type) {
			case PLAY_ENUM_SOCKET.START:
				handleStart();
				break;
			case PLAY_ENUM_SOCKET.GO_TO_BATTLE:
				handleGotoBattle(res);
				break;
			case PLAY_ENUM_SOCKET.END_TURN:
				handleEndTurn(res);
				break;
			case PLAY_ENUM_SOCKET.ATTACK:
				handleAttack(res);
				break;
			case PLAY_ENUM_SOCKET.CLOSE:
				handleClose();
				break;
			case PLAY_ENUM_SOCKET.JOIN:
				handleJoin(res);
				break;
			default:
				break;
		}
	};

	return {
		handlMessagePlaySocket,
	};
}
