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
				<div className={`${styles.wrapImg}`}>
					<Image name="/images/cards/hero/model/celixa.png" option={{ className: `${styles.imgHero}` }} />
				</div>
			</div>
		</>
	);
};

export default memo(CampaignIconPVP);
