import { CARD_TYPE } from './enum';
import { ICardMainPlaying, ICardPlaying } from './interfaces';

export const cardDefault: ICardPlaying[] = [
	{
		id: '',
		src: '',
		type: CARD_TYPE.CARD,
	},
	{
		id: '1',
		src: '/images/cards/hel.png',
		type: CARD_TYPE.CARD,
	},
];

export const cardMainDefault: ICardMainPlaying[] = [
	{
		id: '1',
		src: '/images/cards/hero/thomas.png',
		type: CARD_TYPE.HERO,
	},
	{
		id: '2',
		src: '/images/cards/hero/mei.png',
		type: CARD_TYPE.HERO,
	},
];
