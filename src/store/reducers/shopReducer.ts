import { SHOP_ENUM_TAB } from "@/types/enum";
import { SET_TAB_SHOP, ShopAction, ShopState } from "../types/shopTypes";

const initialState: ShopState = {
  tab: SHOP_ENUM_TAB.HERO,
};

const shopReducer = (state = initialState, action: ShopAction): ShopState => {
  switch (action.type) {
    case SET_TAB_SHOP:
      return {
        ...state,
        tab: action?.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
