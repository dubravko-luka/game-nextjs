import { SHOP_ENUM_TAB } from "@/types/enum";

export const SET_TAB_SHOP = 'SET_TAB_SHOP';

export interface ShopState {
  tab: SHOP_ENUM_TAB;
}

interface setShopAction {
  type: typeof SET_TAB_SHOP;
  payload: SHOP_ENUM_TAB;
}

export type ShopAction = setShopAction;
