import React, { memo } from 'react';
import styles from './styles.module.css';
import Icon from '@/components/Icons/1';
import { ICON_1_ENUM, SCREEN_ENUM } from '@/types/enum';
import { useDispatch } from 'react-redux';
import { setScreen } from '@/store/actions/screenAction';
import LayoutScreen from '@/components/Common/LayoutScreen';
import Image from '@/components/Image';
import FrameAvatar from '@/components/Frame/Avatar';

type Props = {
	//
};

const HomeRanked: React.FC<Props> = () => {
	const dispath = useDispatch();

	return (
		<>
			<div className={`${styles.header}`} onClick={() => dispath(setScreen(SCREEN_ENUM.HOME))}>
				<Icon icon={ICON_1_ENUM.EXISTS} />
			</div>
			<LayoutScreen>
				<div className={`${styles.wrapper}`}>
					<div className={`${styles.content}`}>
						<div className={`${styles.wrapUser}`}>
							<div className={`${styles.user}`}>
								<div className={`${styles.season}`}>
									<span className={`${styles._season}`}>
										S<span>10</span>
									</span>
									<span className={`${styles._seasonTime}`}>
										<p>Season deadline</p>
										<p>01/01/2023</p>
									</span>
								</div>
								<div className={`${styles.contentUser}`}>
									<div className={`${styles.avatar}`}>
										<Image option={{ className: styles._avatar }} name="/images/cards/pieces/allian-pieces.png" />
										<div className={`${styles.frameAvatar}`}>
											<FrameAvatar />
										</div>
									</div>
									<div className={`${styles.point}`}>
										<p className={`${styles._point}`}>
											1206
											<span> / 1500</span>
										</p>
									</div>
								</div>

								<div className={`${styles.startBtn}`}>
									<button className={styles._startBtn}>START</button>
								</div>
							</div>
						</div>

						<div className={`${styles.ranked}`}>
							<div className={`${styles._ranked}`}>
								<div className={`${styles.iconRank}`}>
									<Image option={{ className: styles._iconRank }} name="/images/ranked/rank-a.png" />
									<div className={`${styles.nameRank}`}>
										<p className={`${styles._nameRank}`}>
											Rank <span className={styles.__nameRank}>A</span>
										</p>
									</div>
								</div>
								<div className={`${styles.detailRank}`}>
									<div className={`${styles.detailRankName}`}>
										<p className={styles._detailRankName}>Player Name</p>
									</div>
									<div className={`${styles.detailRankDetailLine}`}>
										<p className={`${styles.detailRankDetailLineName}`}>Victories to Rank Up:</p>
										<p className={`${styles.detailRankDetailLineParam}`}>
											<span className={`${styles.detailTextSpec} ${styles.detailRankDetailLineParam}`}>7</span>
										</p>
									</div>
									<div className={`${styles.detailRankDetailLine}`}>
										<p className={`${styles.detailRankDetailLineName}`}>Defeats to Derank:</p>
										<p className={`${styles.detailRankDetailLineParam}`}>
											<span className={`${styles.detailTextSpec} ${styles.detailRankDetailLineParam}`}>10</span>
										</p>
									</div>
									<div className={`${styles.line}`}></div>
									<div className={`${styles.detailRankDetailLine}`}>
										<p className={`${styles.detailRankDetailLineName}`}>Battle Record:</p>
										<p className={`${styles.detailRankDetailLineParam}`}>
											<span className={`${styles.detailTextSpec} ${styles.detailRankDetailLineParam}`}>10</span> W
											&nbsp;&nbsp;&nbsp;
											<span className={`${styles.detailTextSpec} ${styles.detailRankDetailLineParam}`}>7</span> L
										</p>
									</div>
									<div className={`${styles.detailRankDetailLine}`}>
										<p className={`${styles.detailRankDetailLineName}`}>Longest Win Streak:</p>
										<p className={`${styles.detailRankDetailLineParam}`}>
											<span className={`${styles.detailTextSpec} ${styles.detailRankDetailLineParam}`}>8</span>
										</p>
									</div>
									<div className={`${styles.detailRankDetailLine}`}>
										<p className={`${styles.detailRankDetailLineName}`}>BattleChips:</p>
										<p className={`${styles.detailRankDetailLineParam}`}>
											<span className={`${styles.detailTextSpec} ${styles.detailRankDetailLineParam}`}>355</span> Chips
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</LayoutScreen>
		</>
	);
};

export default memo(HomeRanked);
