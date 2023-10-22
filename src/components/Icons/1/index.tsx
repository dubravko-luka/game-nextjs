import React, { memo } from 'react';
import styles from './styles.module.css';
import { ICON_1_ENUM } from '@/types/enum';
import Image from '@/components/Image';

type Props = {
	icon: ICON_1_ENUM;
};

const Icon: React.FC<Props> = ({ icon }) => {
	//

	return (
		<>
			<div className={`${styles.wrapper}`}>
				<div
					className={`${styles.icon}`}
					style={
						{
							'--left': `-${JSON.parse(icon)[0] * 70}px`,
							'--top': `${-JSON.parse(icon)[1] * 72}px`,
						} as any
					}
				>
					<Image name={'/images/icons/icon-game-1.png'} option={{ className: `${styles.imgIcon}` }} />
				</div>
			</div>
		</>
	);
};

export default memo(Icon);
