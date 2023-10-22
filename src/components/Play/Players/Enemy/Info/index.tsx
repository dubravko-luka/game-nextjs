import React, { memo } from 'react';
import styles from './styles.module.css';
import Image from '@/components/Image';

type Props = {
	//
};

const Info: React.FC<Props> = () => {
	return (
		<>
			{/* Info */}
			<div className={`${styles.infoEnemy}`}>
				<div className={`${styles.infoEnemyContent}`}>
					<div className={`${styles.avatar}`}>
						<Image option={{ className: styles.imageAvatar }} name={'/images/player/avatar.png'} />
					</div>
					<p className={`${styles.playerName}`}>Player Name</p>
					<p className={`${styles.level}`}>Lv. 1</p>
				</div>
			</div>
		</>
	);
};

export default memo(Info);
