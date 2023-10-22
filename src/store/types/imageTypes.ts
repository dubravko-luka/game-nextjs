import { IIndexedDbImage } from '@/types/interfaces';

export const SET_IMAGES = 'SET_IMAGES';

export interface ImageState {
	images: IIndexedDbImage[];
}

interface setImageAction {
	type: typeof SET_IMAGES;
	payload: IIndexedDbImage[];
}

export type ImageAction = setImageAction;
