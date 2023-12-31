import React, { memo, useState } from 'react';
import styles from './styles.module.css';
import Route from './components/route';
import _ from 'lodash';
import Cloud from './components/cloud';
import NewsBoard from './components/news-board';
import Icon from '@/components/Icons/1';
import { ICON_1_ENUM, SCREEN_ENUM } from '@/types/enum';
import { useDispatch } from 'react-redux';
import { setScreen } from '@/store/actions/screenAction';
import Image from '@/components/Image';

type Props = {
	//
};

enum MAP_ENUM {
	BEATMAN = 'BEATMAN',
	DEVIL = 'DEVIL',
	FAIRY = 'FAIRY',
	HUMAN = 'HUMAN',
	MONSTER = 'MONSTER',
}

enum LEVEL_ENUM {
	EASY = 'EASY',
	MEDIUM = 'MEDIUM',
	NORMAL = 'NORMAL',
	DIFFICULT = 'DIFFICULT',
	CUSTOM = 'CUSTOM',
}

interface IMap {
	id: number;
	src: string;
	srcTransparent: string;
	name: string;
	type: MAP_ENUM;
	class: any;
	level: LEVEL_ENUM;
	screen?: SCREEN_ENUM;
}

const map: IMap[] = [
	{
		id: 0,
		src: '/images/tutorial/devil-map.png',
		srcTransparent: '/images/tutorial/devil-map-transparent.png',
		name: 'Devil',
		type: MAP_ENUM?.DEVIL,
		class: styles.mapDevil,
		level: LEVEL_ENUM.EASY,
		screen: SCREEN_ENUM.TUTORIAL_1,
	},
	{
		id: 1,
		src: '/images/tutorial/monster-map.png',
		srcTransparent: '/images/tutorial/monster-map-transparent.png',
		name: 'Monster',
		type: MAP_ENUM?.MONSTER,
		class: styles.mapMonster,
		level: LEVEL_ENUM.MEDIUM,
	},
	{
		id: 2,
		src: '/images/tutorial/beatman-map.png',
		srcTransparent: '/images/tutorial/beatman-map-transparent.png',
		name: 'Beatman',
		type: MAP_ENUM?.BEATMAN,
		class: styles.mapBeatman,
		level: LEVEL_ENUM.NORMAL,
	},
	{
		id: 3,
		src: '/images/tutorial/human-map.png',
		srcTransparent: '/images/tutorial/human-map-transparent.png',
		name: 'Human',
		type: MAP_ENUM?.HUMAN,
		class: styles.mapHuman,
		level: LEVEL_ENUM.DIFFICULT,
	},
	{
		id: 4,
		src: '/images/tutorial/fairy-map.png',
		srcTransparent: '/images/tutorial/fairy-map.png',
		name: 'Fairy',
		type: MAP_ENUM?.FAIRY,
		class: styles.mapFairy,
		level: LEVEL_ENUM.CUSTOM,
	},
];

const Map: React.FC<Props> = () => {
	const dispath = useDispatch();

	const [currentMap] = useState(_.find(map, { id: 4 }));
	const [hoverIndex, setHoverIndex] = useState(-1);
	const [isLandSelect, seIsLandSelect] = useState<IMap | any>(null);
	const dispatch = useDispatch();

	const handleClickMap = (item: IMap) => {
		seIsLandSelect(item);
	};

	return (
		<>
			{isLandSelect ? (
				<div className={`${styles.header}`} onClick={() => seIsLandSelect(null)}>
					<Icon icon={ICON_1_ENUM.EXISTS} />
				</div>
			) : (
				<>
					<div className={`${styles.header}`} onClick={() => dispath(setScreen(SCREEN_ENUM.HOME))}>
						<Icon icon={ICON_1_ENUM.HOME} />
					</div>
				</>
			)}
			<div className={`${styles.wrapper} ${styles[isLandSelect?.type?.toLowerCase()]}`}>
				<div className={`${styles.content} ${isLandSelect ? styles.active : ''}`}>
					{map?.map((item, index) => (
						<div
							key={index}
							className={`${styles.island} ${item.class} ${
								item?.id <= Number(currentMap?.id) && isLandSelect === null ? styles.active : ''
							} ${isLandSelect?.id === item?.id ? styles.activeZoom : ''} ${hoverIndex === index ? styles.hover : ''}`}
						>
							{(item?.id === Number(currentMap?.id) || item?.id === Number(currentMap?.id) - 1) && (
								<div className={`${styles.sphere}`}></div>
							)}
							<Image name={item?.src} option={{ className: `${styles.imgMap}` }} />
						</div>
					))}

					{currentMap?.type !== MAP_ENUM.DEVIL && (
						<div className={`${styles.route} ${styles[currentMap?.type?.toLowerCase() ?? '']}`}>
							<div className={`${styles._route}`}>
								<Route />
							</div>
						</div>
					)}
				</div>
			</div>
			<div className={`${styles.cloud}`}>
				<Cloud />
			</div>
			<div className={`${styles.wrapperTransparent} ${styles[isLandSelect?.type?.toLowerCase()]}`}>
				<div className={`${styles.content} ${isLandSelect ? styles.active : ''}`}>
					{map?.map((item, index) => (
						<div
							onClick={() => handleClickMap(item)}
							key={index}
							className={`${styles.island} ${item.class}`}
							onMouseEnter={() => {
								setHoverIndex(index);
							}}
							onMouseLeave={() => {
								setHoverIndex(-1);
							}}
						>
							<Image name={item?.src} option={{ className: `${styles.imgMap}` }} />
						</div>
					))}
				</div>
			</div>
			<div className={`${styles.introIsland} ${isLandSelect ? styles.active : styles.hidden}`}>
				<NewsBoard />
				<div className={`${styles.introIslandContainer}`}>
					<div className={`${styles.introIslandContent}`}>
						<p className={`${styles.title}`}>{isLandSelect?.name?.toUpperCase()} ISLAND</p>
						<p className={`${styles.subTitle}`}>(Tutorial {isLandSelect?.id + 1})</p>
						<div className={`${styles.detail}`}>
							<p className={`${styles.level}`}>
								Level: <span className={styles._level}>{isLandSelect?.level?.toUpperCase()}</span>
							</p>
							<p className={styles.text}>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti officia, quod quidem placeat hic
								ducimus consequatur, dicta accusantium neque cum facilis atque officiis quia vel perferendis illum enim
								dolor? Doloribus.
							</p>
							<p className={styles.text}>
								Perspiciatis voluptatum blanditiis eos rem a molestiae ut labore, perferendis culpa id voluptas suscipit
								fugiat, nesciunt iusto provident cumque quaerat unde facilis! Delectus inventore debitis enim
								repudiandae unde, quo fugiat?
							</p>
						</div>
						<button className={styles.btnStart} onClick={() => dispatch(setScreen(isLandSelect?.screen))}>
							START
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default memo(Map);
