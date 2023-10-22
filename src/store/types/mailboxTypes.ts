import { MAILBOX_ENUM_TAB } from '@/types/enum';

export const SET_TAB_MAILBOX = 'SET_TAB_MAILBOX';

export interface MailboxState {
	tab: MAILBOX_ENUM_TAB;
}

interface setMailboxAction {
	type: typeof SET_TAB_MAILBOX;
	payload: MAILBOX_ENUM_TAB;
}

export type MailboxAction = setMailboxAction;
