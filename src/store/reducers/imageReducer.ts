import { SET_IMAGES, ImageAction, ImageState } from "../types/imageTypes";

const initialState: ImageState = {
  images: [],
};

const imageReducer = (state = initialState, action: ImageAction): ImageState => {
  switch (action.type) {
    case SET_IMAGES:
      return {
        ...state,
        images: [...action?.payload],
      };
    default:
      return state;
  }
};

export default imageReducer;
