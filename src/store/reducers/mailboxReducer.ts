import { MAILBOX_ENUM_TAB } from '@/types/enum';
import { SET_TAB_MAILBOX, MailboxAction, MailboxState } from '../types/mailboxTypes';

const initialState: MailboxState = {
	tab: MAILBOX_ENUM_TAB.SYSTEM,
};

const mailboxReducer = (state = initialState, action: MailboxAction): MailboxState => {
	switch (action.type) {
		case SET_TAB_MAILBOX:
			return {
				...state,
				tab: action?.payload,
			};
		default:
			return state;
	}
};

export default mailboxReducer;
