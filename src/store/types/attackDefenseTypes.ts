import { ICardPlaying } from '@/types/interfaces';

export const SET_CARD_ATTACK = 'SET_CARD_ATTACK';
export const SET_CARD_DEFENSE = 'SET_CARD_DEFENSE';
export const SET_IS_ATTACK = 'SET_IS_ATTACK';
export const SET_DELAY_SKILL = 'SET_DELAY_SKILL';
export const SET_TURN_YOUR = 'SET_TURN_YOUR';
export const SET_TURN_ENEMY = 'SET_TURN_ENEMY';
export const SET_READY = 'SET_READY';
export const RESET_ATTACK_DEFENSE = 'RESET_ATTACK_DEFENSE';

export interface AttackDefenseState {
	card_attack: ICardPlaying;
	card_defense: ICardPlaying;
	isAttack: boolean;
	delaySkill: number;
	turnYour: boolean;
	turnEnemy: boolean;
	ready: boolean[];
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

interface setTurnYourAction {
	type: typeof SET_TURN_YOUR;
	payload: boolean;
}

interface setTurnEnemyAction {
	type: typeof SET_TURN_ENEMY;
	payload: boolean;
}

interface setReadyAction {
	type: typeof SET_READY;
	payload: boolean[];
}

interface resetAttackDefense {
	type: typeof RESET_ATTACK_DEFENSE;
}

export type AttackDefenseAction =
	| setCardAttackAction
	| setCardDefenseAction
	| setIsAttackAction
	| setDelaySkillAction
	| setTurnYourAction
	| setTurnEnemyAction
	| setReadyAction
	| resetAttackDefense;
