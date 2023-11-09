import { ICardPlaying } from '@/types/interfaces';
import {
	SET_CARD_ATTACK,
	SET_CARD_DEFENSE,
	SET_DELAY_SKILL,
	SET_IS_ATTACK,
	SET_TURN_YOUR,
	SET_TURN_ENEMY,
	SET_READY,
	RESET_ATTACK_DEFENSE,
} from '../types/attackDefenseTypes';

export const setCardAttack = (card: ICardPlaying) => {
	return {
		type: SET_CARD_ATTACK,
		payload: card,
	};
};

export const setCardDefense = (card: ICardPlaying) => {
	return {
		type: SET_CARD_DEFENSE,
		payload: card,
	};
};

export const setIsAttack = (isAttack: boolean) => {
	return {
		type: SET_IS_ATTACK,
		payload: isAttack,
	};
};

export const setDelaySkill = (delay: number) => {
	return {
		type: SET_DELAY_SKILL,
		payload: delay,
	};
};

export const setYourTurn = (turn: boolean) => {
	return {
		type: SET_TURN_YOUR,
		payload: turn,
	};
};

export const setTurnEnemy = (turn: boolean) => {
	return {
		type: SET_TURN_ENEMY,
		payload: turn,
	};
};

export const setReady = (ready: boolean[]) => {
	return {
		type: SET_READY,
		payload: ready,
	};
};

export const resetAttackDefense = () => {
	return {
		type: RESET_ATTACK_DEFENSE
	}
}