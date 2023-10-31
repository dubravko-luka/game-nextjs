import React, { memo } from 'react';
import styles from './styles.module.css';
import { CARD_ENUM_TAB } from '@/types/enum';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import { setTab } from '@/store/actions/cardAction';

type Props = {
	//
};

const tabs = [
	{
		name: 'All',
		tab: CARD_ENUM_TAB.ALL,
	},
	{
		name: 'Beatman',
		tab: CARD_ENUM_TAB.BEATMAN,
	},
	{
		name: 'Devil',
		tab: CARD_ENUM_TAB.DEVIL,
	},
	{
		name: 'Fairy',
		tab: CARD_ENUM_TAB.FAIRY,
	},
	{
		name: 'Human',
		tab: CARD_ENUM_TAB.HUMAN,
	},
	{
		name: 'Monster',
		tab: CARD_ENUM_TAB.MONSTER,
	},
];

const Tab: React.FC<Props> = () => {
	const tabActive = useSelector((state: RootState) => state?.card?.tab);
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
