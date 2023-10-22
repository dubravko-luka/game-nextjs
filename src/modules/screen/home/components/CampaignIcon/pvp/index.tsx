import React, { memo } from 'react';
import styles from './styles.module.css';
import Image from '@/components/Image';

type Props = {
	//
};

const CampaignIconPVP: React.FC<Props> = () => {
	return (
		<>
			<div className={`${styles.wrapper}`}>
				<div className={`${styles.wrapImg} ${styles.img_1}`}>
					<Image name="/images/cards/hero/mei.png" option={{ className: `${styles.img}` }} />
				</div>
				<div className={`${styles.wrapImg} ${styles.img_2}`}>
					<Image name="/images/cards/hero/thomas.png" option={{ className: `${styles.img}` }} />
				</div>
			</div>
		</>
	);
};

export default memo(CampaignIconPVP);
