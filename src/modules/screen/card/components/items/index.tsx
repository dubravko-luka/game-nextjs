import React, { memo, useEffect, useState } from 'react';
import styles from './styles.module.css';
import Image from '@/components/Image';
import { RootState } from '@/store/types';
import { useSelector } from 'react-redux';
import { CARD_ENUM_TAB } from '@/types/enum';
import Detail from './detail';
import LazyLoadCard from '@/components/LazyLoadItem/Card';

type Props = {
	//
};

type TypeItem = {
	id: number;
	type: number;
	name: string;
	src: string;
};

const beatman: TypeItem[] = [
	{
		id: 0,
		type: 0,
		name: 'dextra',
		src: '/images/cards/beatman/dextra.png',
	},
	{
		id: 1,
		type: 0,
		name: 'fenxy',
		src: '/images/cards/beatman/fenxy.png',
	},
	{
		id: 2,
		type: 0,
		name: 'liusman',
		src: '/images/cards/beatman/liusman.png',
	},
	{
		id: 3,
		type: 0,
		name: 'sepha',
		src: '/images/cards/beatman/sepha.png',
	},
	{
		id: 4,
		type: 0,
		name: 'sharkman',
		src: '/images/cards/beatman/sharkman.png',
	},
	{
		id: 5,
		type: 0,
		name: 'yena',
		src: '/images/cards/beatman/yena.png',
	},
	{
		id: 6,
		type: 0,
		name: 'cresh',
		src: '/images/cards/beatman/cresh.png',
	},
	{
		id: 7,
		type: 0,
		name: 'butterman',
		src: '/images/cards/beatman/butterman.png',
	},
	{
		id: 8,
		type: 0,
		name: 'monkey king',
		src: '/images/cards/beatman/monkeyking.png',
	},
	{
		id: 9,
		type: 0,
		name: 'ardum',
		src: '/images/cards/beatman/ardum.png',
	},
	{
		id: 10,
		type: 0,
		name: 'mia',
		src: '/images/cards/beatman/mia.png',
	},
	{
		id: 11,
		type: 0,
		name: 'liota',
		src: '/images/cards/beatman/liota.png',
	},
];

const devil: TypeItem[] = [
	{
		id: 0,
		type: 1,
		name: 'septid',
		src: '/images/cards/devil/septid.png',
	},
	{
		id: 1,
		type: 1,
		name: 'hullot',
		src: '/images/cards/devil/hullot.png',
	},
	{
		id: 2,
		type: 1,
		name: 'gregory',
		src: '/images/cards/devil/gregory.png',
	},
	{
		id: 3,
		type: 1,
		name: 'maynard',
		src: '/images/cards/devil/maynard.png',
	},
	{
		id: 4,
		type: 1,
		name: 'claries',
		src: '/images/cards/devil/claries.png',
	},
	{
		id: 5,
		type: 1,
		name: 'ornted',
		src: '/images/cards/devil/ornted.png',
	},
	{
		id: 6,
		type: 1,
		name: 'vlader',
		src: '/images/cards/devil/vlader.png',
	},
	{
		id: 7,
		type: 1,
		name: 'skeleton',
		src: '/images/cards/devil/skeleton.png',
	},
	{
		id: 8,
		type: 1,
		name: 'death',
		src: '/images/cards/devil/death.png',
	},
	{
		id: 9,
		type: 1,
		name: 'diones',
		src: '/images/cards/devil/diones.png',
	},
	{
		id: 10,
		type: 1,
		name: 'bled',
		src: '/images/cards/devil/bled.png',
	},
	{
		id: 11,
		type: 1,
		name: 'matiled',
		src: '/images/cards/devil/matiled.png',
	},
];

const fairy: TypeItem[] = [
	{
		id: 0,
		type: 2,
		name: 'calixto',
		src: '/images/cards/fairy/calixto.png',
	},
	{
		id: 1,
		type: 2,
		name: 'vivian',
		src: '/images/cards/fairy/vivian.png',
	},
	{
		id: 2,
		type: 2,
		name: 'xavia',
		src: '/images/cards/fairy/xavia.png',
	},
	{
		id: 3,
		type: 2,
		name: 'sephera',
		src: '/images/cards/fairy/sephera.png',
	},
	{
		id: 4,
		type: 2,
		name: ' cael',
		src: '/images/cards/fairy/ cael.png',
	},
	{
		id: 5,
		type: 2,
		name: 'fiona',
		src: '/images/cards/fairy/fiona.png',
	},
	{
		id: 6,
		type: 2,
		name: 'pandora',
		src: '/images/cards/fairy/pandora.png',
	},
	{
		id: 7,
		type: 2,
		name: 'posy',
		src: '/images/cards/fairy/posy.png',
	},
	{
		id: 8,
		type: 2,
		name: 'regina',
		src: '/images/cards/fairy/regina.png',
	},
	{
		id: 9,
		type: 2,
		name: 'lily',
		src: '/images/cards/fairy/lily.png',
	},
	{
		id: 10,
		type: 2,
		name: 'jocasta',
		src: '/images/cards/fairy/jocasta.png',
	},
	{
		id: 11,
		type: 2,
		name: 'alma',
		src: '/images/cards/fairy/alma.png',
	},
];

const human: TypeItem[] = [
	{
		id: 0,
		type: 3,
		name: 'celixa',
		src: '/images/cards/human/celixa.png',
	},
	{
		id: 1,
		type: 3,
		name: 'zanis',
		src: '/images/cards/human/zanis.png',
	},
	{
		id: 2,
		type: 3,
		name: 'moraz',
		src: '/images/cards/human/moraz.png',
	},
	{
		id: 3,
		type: 3,
		name: 'allian',
		src: '/images/cards/human/allian.png',
	},
	{
		id: 4,
		type: 3,
		name: 'rock',
		src: '/images/cards/human/rock.png',
	},
	{
		id: 5,
		type: 3,
		name: 'roxie',
		src: '/images/cards/human/roxie.png',
	},
	{
		id: 6,
		type: 3,
		name: 'thane',
		src: '/images/cards/human/thane.png',
	},
	{
		id: 7,
		type: 3,
		name: 'radman',
		src: '/images/cards/human/radman.png',
	},
	{
		id: 8,
		type: 3,
		name: 'richter',
		src: '/images/cards/human/richter.png',
	},
	{
		id: 9,
		type: 3,
		name: 'ryo',
		src: '/images/cards/human/ryo.png',
	},
	{
		id: 10,
		type: 3,
		name: 'enroth',
		src: '/images/cards/human/enroth.png',
	},
	{
		id: 11,
		type: 3,
		name: 'shin',
		src: '/images/cards/human/shin.png',
	},
];

const monster: TypeItem[] = [
	{
		id: 0,
		type: 4,
		name: 'belius',
		src: '/images/cards/monster/belius.png',
	},
	{
		id: 1,
		type: 4,
		name: 'cloeries',
		src: '/images/cards/monster/cloeries.png',
	},
	{
		id: 2,
		type: 4,
		name: 'feades',
		src: '/images/cards/monster/feades.png',
	},
	{
		id: 3,
		type: 4,
		name: 'firefos',
		src: '/images/cards/monster/firefos.png',
	},
	{
		id: 4,
		type: 4,
		name: 'memetius',
		src: '/images/cards/monster/memetius.png',
	},
	{
		id: 5,
		type: 4,
		name: 'zodius',
		src: '/images/cards/monster/zodius.png',
	},
	{
		id: 6,
		type: 4,
		name: 'troeder',
		src: '/images/cards/monster/troeder.png',
	},
	{
		id: 7,
		type: 4,
		name: 'cfoges',
		src: '/images/cards/monster/cfoges.png',
	},
	{
		id: 8,
		type: 4,
		name: 'taerus',
		src: '/images/cards/monster/taerus.png',
	},
	{
		id: 9,
		type: 4,
		name: 'klarius',
		src: '/images/cards/monster/klarius.png',
	},
	{
		id: 10,
		type: 4,
		name: 'amycus',
		src: '/images/cards/monster/amycus.png',
	},
	{
		id: 11,
		type: 4,
		name: 'pegamus',
		src: '/images/cards/monster/pegamus.png',
	},
];

const all = [...beatman, ...devil, ...fairy, ...human, ...monster];

const Iterms: React.FC<Props> = () => {
	const [itemSelect, setItemSelect] = useState(all[0]);
	const tabActive = useSelector((state: RootState) => state?.card?.tab);
	const [list, setList] = useState<TypeItem[]>(all);
	const [visibleDivs, setVisibleDivs] = useState<any>([]);

	useEffect(() => {
		if (tabActive === CARD_ENUM_TAB.ALL) {
			setItemSelect(all[0]);
		}
		if (tabActive === CARD_ENUM_TAB.BEATMAN) {
			setItemSelect(beatman[0]);
		}
		if (tabActive === CARD_ENUM_TAB.DEVIL) {
			setItemSelect(devil[0]);
		}
		if (tabActive === CARD_ENUM_TAB.FAIRY) {
			setItemSelect(fairy[0]);
		}
		if (tabActive === CARD_ENUM_TAB.HUMAN) {
			setItemSelect(human[0]);
		}
		if (tabActive === CARD_ENUM_TAB.MONSTER) {
			setItemSelect(monster[0]);
		}
	}, [tabActive]);

	useEffect(() => {
		if (tabActive === CARD_ENUM_TAB.ALL) {
			setList([...all]);
		}
		if (tabActive === CARD_ENUM_TAB.BEATMAN) {
			setList([...beatman]);
		}
		if (tabActive === CARD_ENUM_TAB.DEVIL) {
			setList([...devil]);
		}
		if (tabActive === CARD_ENUM_TAB.FAIRY) {
			setList([...fairy]);
		}
		if (tabActive === CARD_ENUM_TAB.HUMAN) {
			setList([...human]);
		}
		if (tabActive === CARD_ENUM_TAB.MONSTER) {
			setList([...monster]);
		}
	}, [tabActive]);

	return (
		<>
			<div className={`${styles.wrapper}`}>
				<div className={`${styles.wrapItems}`}>
					<LazyLoadCard list={list} visibleDivs={visibleDivs} setVisibleDivs={setVisibleDivs}>
						<div className={`${styles.items}`}>
							{list.map((item, index) => (
								<div
									key={index}
									className={`item-game ${styles.item} ${
										itemSelect.id === item.id && itemSelect.type === item.type ? styles.active : ''
									}`}
									onClick={() => setItemSelect(item)}
								>
									<Image
										option={{ className: `${styles.imgItem} ${visibleDivs.includes(index) ? '' : styles.displayNone}` }}
										name={item?.src}
									/>
								</div>
							))}
						</div>
					</LazyLoadCard>
				</div>
				<Detail item={itemSelect} />
			</div>
		</>
	);
};

export default memo(Iterms);
