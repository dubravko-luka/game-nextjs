import { ICardPlaying } from '@/types/interfaces';

export const SET_CARD_ATTACK = 'SET_CARD_ATTACK';
export const SET_CARD_DEFENSE = 'SET_CARD_DEFENSE';
export const SET_IS_ATTACK = 'SET_IS_ATTACK';
export const SET_DELAY_SKILL = 'SET_DELAY_SKILL';

export interface AttackDefenseState {
	card_attack: ICardPlaying;
	card_defense: ICardPlaying;
	isAttack: boolean;
	delaySkill: number;
}

interface setCardAttackAction {
	type: typeof SET_CARD_ATTACK;
	payload: ICardPlaying;
}

interface setCardDefenseAction {
	type: typeof SET_CARD_DEFENSE;
	payload: ICardPlaying;
}

interface setIsAttackAction {
	type: typeof SET_IS_ATTACK;
	payload: boolean;
}

interface setDelaySkillAction {
	type: typeof SET_DELAY_SKILL;
	payload: number;
}

export type AttackDefenseAction = setCardAttackAction | setCardDefenseAction | setIsAttackAction | setDelaySkillAction;
