import React, { memo } from 'react';
import styles from './styles.module.css';
import { SHOP_ENUM_TAB } from '@/types/enum';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import { setTab } from '@/store/actions/shopAction';

type Props = {
	//
};

const tabs = [
	{
		name: 'Hero',
		tab: SHOP_ENUM_TAB.HERO,
	},
	{
		name: 'Card',
		tab: SHOP_ENUM_TAB.CARD,
	},
	{
		name: 'Mystery Box',
		tab: SHOP_ENUM_TAB.MYSTERY_BOX,
	},
];

const Tab: React.FC<Props> = () => {
	const tabActive = useSelector((state: RootState) => state?.shop?.tab);
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
