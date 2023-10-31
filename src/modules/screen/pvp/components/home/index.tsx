import React, { memo } from 'react';
import styles from './styles.module.css';
import Icon from '@/components/Icons/1';
import { ICON_1_ENUM, SCREEN_ENUM } from '@/types/enum';
import { useDispatch } from 'react-redux';
import { setScreen } from '@/store/actions/screenAction';
import LayoutScreen from '@/components/Common/LayoutScreen';
import Image from '@/components/Image';

type Props = {
	//
};

const HomeTutorial: React.FC<Props> = () => {
	const dispath = useDispatch();

	return (
		<>
			<div className={`${styles.header}`} onClick={() => dispath(setScreen(SCREEN_ENUM.HOME))}>
				<Icon icon={ICON_1_ENUM.EXISTS} />
			</div>
			<LayoutScreen>
				<div className={`${styles.wrapper}`}>
					<div className={`${styles.content}`}>
						<div className={`${styles.line}`}>
							<Image name="/images/pvp/vs-line.png" />
						</div>
						<div className={styles.container}>
							<div className={`${styles.top}`}>
								<div className={`${styles.user}`}>
									<div className={`${styles.infoBasic}`}>
										<div className={`${styles.avatar}`}>
											<Image name="/images/cards/pieces/allian-pieces.png" option={{ className: styles.imgAvatar }} />
										</div>
										<div className={`${styles.basic}`}>
											<div className={`${styles.name}`}>
												<p className={styles._name}>Player Name</p>
											</div>
											<div className={`${styles.level}`}>
												<p className={`${styles._level}`}>Lv. 37</p>
											</div>
										</div>
									</div>

									<div className={`${styles.info}`}>
										<div className={`${styles.iconRank}`}>
											<Image option={{ className: styles._iconRank }} name="/images/ranked/rank-a.png" />
										</div>
									</div>
								</div>
							</div>
							<div className={`${styles.bottom}`}>
								<div className={`${styles.enemy}`}>
									<div className={`${styles.info}`}>
										<div className={`${styles.iconRank}`}>
											<Image option={{ className: styles._iconRank }} name="/images/ranked/rank-a.png" />
										</div>
									</div>
									<div className={`${styles.infoBasic}`}>
										<div className={`${styles.avatar}`}>
											<Image name="/images/cards/pieces/mia-pieces.png" option={{ className: styles.imgAvatar }} />
										</div>
										<div className={`${styles.basic}`}>
											<div className={`${styles.name}`}>
												<p className={styles._name}>Player Name</p>
											</div>
											<div className={`${styles.level}`}>
												<p className={`${styles._level}`}>Lv. 37</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={`${styles.startBtn}`}>
							<button className={styles._startBtn}>START</button>
						</div>
					</div>
				</div>
			</LayoutScreen>
		</>
	);
};

export default memo(HomeTutorial);
