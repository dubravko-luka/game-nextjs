import { CARD_TYPE } from './enum';
import { ICardMainPlaying, ICardPlaying } from './interfaces';

export const cardDefault: ICardPlaying[] = [
	{
		id: '',
		src: '',
		type: CARD_TYPE.CARD,
		dame: 0,
		hp: 0,
	},
	{
		id: '1',
		src: '/images/cards/devil/septid.png',
		type: CARD_TYPE.CARD,
		dame: 2,
		hp: 5,
	},
	{
		id: '2',
		src: '/images/cards/human/allian.png',
		type: CARD_TYPE.CARD,
		dame: 2,
		hp: 5,
	},
];

export const cardMainDefault: ICardMainPlaying[] = [
	{
		id: '',
		src: '',
		type: CARD_TYPE.HERO,
		dame: 0,
		hp: 0,
	},
	{
		id: '1',
		src: '/images/cards/devil/septid.png',
		type: CARD_TYPE.HERO,
		dame: 2,
		hp: 5,
	},
	{
		id: '2',
		src: '/images/cards/human/allian.png',
		type: CARD_TYPE.HERO,
		dame: 2,
		hp: 5,
	},
];
