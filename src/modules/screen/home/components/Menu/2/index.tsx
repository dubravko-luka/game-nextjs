import React, { memo } from 'react';
import styles from './styles.module.css';
import Icon from '@/components/Icons/1';
import Icon2 from '@/components/Icons/2';
import { ICON_1_ENUM, ICON_2_ENUM } from '@/types/enum';
import Image from '@/components/Image';

type Props = {
	//
};

const foreignNames = [
	'Allian',
	'Vlader',
	'Vivian',
	'Bled',
	'Cfoges',
	'Thanes',
	'Sharkmans',
	'Gregory',
	'Klarius',
	'Lily',
	'Sephera',
	'Moraz',
	'Mia',
	'Monkey King',
	'Memetius',
	'Allian',
	'Vivian',
	'Sephera',
	'Klarius',
	'Vlader',
];

const MenuHome: React.FC<Props> = () => {
	return (
		<>
			<div className={`${styles.wrapper}`}>
				<div className={`${styles.head}`}>
					<Icon icon={ICON_1_ENUM.RANK} />
				</div>
				<div className={`${styles.content} no-sb`}>
					{foreignNames?.map((item, index) => (
						<div className={`${styles.item}`} key={index}>
							<div className={`${styles.rankDetail}`}>
								<div className={`${styles.numberRank}`}>
									<div className={`${styles.rank}`}>
										{index === 0 && <Icon2 icon={ICON_2_ENUM.NUMBER_1} />}
										{index === 1 && <Icon2 icon={ICON_2_ENUM.NUMBER_2} />}
										{index === 2 && <Icon2 icon={ICON_2_ENUM.NUMBER_3} />}
									</div>
								</div>
								<div className={`${styles.avatar}`}>
									<Image
										name={`/images/cards/pieces/${item.toLowerCase().replace(/ /g, '-')}-pieces.png`}
										option={{ className: `${styles.imgAvatar}` }}
									/>
								</div>
								<div className={`${styles.info}`}>
									<div>
										<p className={`${styles.name}`}>{item}</p>
										<p className={`${styles.wrapPoint}`}>
											Point: <span className={`${styles.point}`}>{10873 - index * 439}</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default memo(MenuHome);
