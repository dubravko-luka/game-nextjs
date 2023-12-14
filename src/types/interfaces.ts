import { CARD_TYPE } from './enum';

export interface IIndexedDbImage {
	key: string;
	base64Image: string;
}

export interface ICardPlaying {
	id: string;
	src: string;
	selected?: boolean;
	dame: number;
	hp: number;
	type: CARD_TYPE;
}

export interface ICardMainPlaying {
	id: string;
	src: string;
	selected?: boolean;
	dame: number;
	hp: number;
	type: CARD_TYPE;
}
