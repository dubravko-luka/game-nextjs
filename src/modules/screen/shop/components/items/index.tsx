import React, { memo, useEffect, useState } from 'react';
import styles from './styles.module.css';
import Image from '@/components/Image';
import { RootState } from '@/store/types';
import { useSelector } from 'react-redux';
import { SHOP_ENUM_TAB } from '@/types/enum';

type Props = {
	//
};

const hero = [
	{
		id: 0,
		type: SHOP_ENUM_TAB.HERO,
		name: 'Cresh',
		src: '/images/cards/beatman/cresh.png',
	},
	{
		id: 1,
		type: SHOP_ENUM_TAB.HERO,
		name: 'Vlader',
		src: '/images/cards/devil/vlader.png',
	},
	{
		id: 2,
		type: SHOP_ENUM_TAB.HERO,
		name: 'Posy',
		src: '/images/cards/fairy/posy.png',
	},
	{
		id: 3,
		type: SHOP_ENUM_TAB.HERO,
		name: 'Jormungandr',
		src: '/images/cards/human/roxie.png',
	},
	{
		id: 4,
		type: SHOP_ENUM_TAB.HERO,
		name: 'Zodius',
		src: '/images/cards/monster/zodius.png',
	},
];

const card = [
	{
		id: 0,
		type: SHOP_ENUM_TAB.CARD,
		name: 'Pack Card',
		src: '/images/items/pack-card.png',
	},
];

const mystery_box = [
	{
		id: 0,
		type: SHOP_ENUM_TAB.MYSTERY_BOX,
		name: 'Gemstone',
		src: '/images/items/mystery-box.gif',
	},
];

const Iterms: React.FC<Props> = () => {
	const [itemSelect, setItemSelect] = useState(mystery_box[0]);
	const tabActive = useSelector((state: RootState) => state?.shop?.tab);

	useEffect(() => {
		if (tabActive === SHOP_ENUM_TAB.HERO) {
			setItemSelect(hero[0]);
		}
		if (tabActive === SHOP_ENUM_TAB.CARD) {
			setItemSelect(card[0]);
		}
		if (tabActive === SHOP_ENUM_TAB.MYSTERY_BOX) {
			setItemSelect(mystery_box[0]);
		}
	}, [tabActive]);

	return (
		<>
			<div className={`${styles.wrapper}`}>
				<div className={`${styles.wrapItems}`}>
					<div className={`${styles.items}`}>
						{tabActive === SHOP_ENUM_TAB.HERO &&
							hero.map((item, index) => (
								<div
									key={index}
									className={`${styles.item} ${
										itemSelect.id === item.id && itemSelect.type === item.type ? styles.active : ''
									}`}
									onClick={() => setItemSelect(item)}
								>
									<Item item={item} />
								</div>
							))}
						{tabActive === SHOP_ENUM_TAB.CARD &&
							card.map((item, index) => (
								<div
									key={index}
									className={`${styles.item} ${
										itemSelect.id === item.id && itemSelect.type === item.type ? styles.active : ''
									}`}
									onClick={() => setItemSelect(item)}
								>
									<Item item={item} />
								</div>
							))}
						{tabActive === SHOP_ENUM_TAB.MYSTERY_BOX &&
							mystery_box.map((item, index) => (
								<div
									key={index}
									className={`${styles.item} ${
										itemSelect.id === item.id && itemSelect.type === item.type ? styles.active : ''
									}`}
									onClick={() => setItemSelect(item)}
								>
									<Item item={item} />
								</div>
							))}
					</div>
				</div>
			</div>
		</>
	);
};

export default memo(Iterms);

type ItemProps = {
	item: any;
};

const Item: React.FC<ItemProps> = ({ item }) => {
	return (
		<>
			<div className={`${styles.wrapItem}`}>
				<div className={`${styles.name}`}>
					<p className={styles._name}>{item?.name}</p>
				</div>
				<div className={`${styles.wrapperItem}`}>
					<Image option={{ className: styles.imgItem }} name={item?.src} />
				</div>
				<div className={`${styles.price}`}>
					<p className={styles.priceNew}>
						$300 <s className={styles.priceOld}>$500</s>
					</p>
				</div>
			</div>
		</>
	);
};
