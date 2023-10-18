import { MAILBOX_ENUM_TAB } from '@/types/enum';
import { SET_TAB_MAILBOX } from '../types/mailboxTypes';

export const setTab = (tab: MAILBOX_ENUM_TAB) => {
  return {
    type: SET_TAB_MAILBOX,
    payload: tab
  };
};