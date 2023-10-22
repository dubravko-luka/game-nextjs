import React, { memo } from 'react';
import styles from './styles.module.css';
import { MAILBOX_ENUM_TAB } from '@/types/enum';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import { setTab } from '@/store/actions/mailboxAction';

type Props = {
	//
};

const tabs = [
	{
		name: 'System',
		tab: MAILBOX_ENUM_TAB.SYSTEM,
	},
	{
		name: 'News',
		tab: MAILBOX_ENUM_TAB.NEWS,
	},
	{
		name: 'Gifts',
		tab: MAILBOX_ENUM_TAB.GIFTS,
	},
];

const Tab: React.FC<Props> = () => {
	const tabActive = useSelector((state: RootState) => state?.mailbox.tab);
	const dispatch = useDispatch();

	return (
		<>
			<div className={`${styles.wrapper}`}>
				{tabs.map((item, index) => (
					<div
						onClick={() => dispatch(setTab(item.tab))}
						className={`${styles.item} ${item?.tab === tabActive ? styles.active : ''}`}
						key={index}
					>
						<p className={`${styles.itemText}`}>{item.name}</p>
					</div>
				))}
			</div>
		</>
	);
};

export default memo(Tab);
