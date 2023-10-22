import { IIndexedDbImage } from '@/types/interfaces';
import { SET_IMAGES } from '../types/imageTypes';

export const setImages = (images: IIndexedDbImage[]) => {
	return {
		type: SET_IMAGES,
		payload: images,
	};
};
