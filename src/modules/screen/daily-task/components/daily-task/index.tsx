import React, { memo } from 'react';
import styles from './styles.module.css';
import Image from '@/components/Image';

type Props = {
	//
};

const DailyTask: React.FC<Props> = () => {
	return (
		<>
			<div className={`${styles.wrapper}`}>
				<div className={`${styles.bg}`}>
					<div className={`${styles.frame}`}>
						<Image name="/images/daily-task/frame.png" option={{ className: styles.imageFrame }} />
					</div>
					<div className={`${styles.hero}`}>
						<Image name="/images/cards/hero/model/regina.png" option={{ className: styles.imageHero }} />
					</div>
					<div className={`${styles.text}`}>
						<p className={styles.title}>PROGRESS COMPLETED</p>
						<p className={styles.progress}>3/10</p>
					</div>
				</div>
				<div className={`${styles.container}`}>
					<div className={`${styles.content} no-sb`}>
						{new Array(10).fill(null).map((item, index) => (
							<div className={`${styles.mission}`} key={index}>
								<div className={`${styles.detail}`}>
									<p className={styles.detailTextMission}>Đăng nhập mỗi ngày</p>
									<div className={`${styles.wrapReward}`}>
										<div className={`${styles.reward}`}>
											<Image name="/images/items/gemstone.png" option={{ className: styles.imgReward }} />
											<p className={styles.rewardNumber}>5</p>
										</div>
										<div className={`${styles.reward}`}>
											<Image name="/images/items/gemstone.png" option={{ className: styles.imgReward }} />
											<p className={styles.rewardNumber}>10</p>
										</div>
									</div>
								</div>
								<div className={`${styles.action}`}>
									<div>
										<p className={styles.progress}>0/ 1</p>
										<button className={styles.goDoneMission}>Go</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default memo(DailyTask);
