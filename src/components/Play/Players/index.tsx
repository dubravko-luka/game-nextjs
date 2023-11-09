import React, { memo } from 'react';
import styles from './styles.module.css';
import SettingPlayGame from './Setting';
import Ally from './Ally';
import Enemy from './Enemy';
import Image from '@/components/Image';
import InfoEnemy from './Enemy/Info';
import Action from './Action';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import { useWebSocket } from '@/hooks/useWebSocketPlay';

type Props = {
	//
};

const Players: React.FC<Props> = () => {
	const { card_attack, card_defense } = useSelector((state: RootState) => state?.attackDefense);

	return (
		<>
			<div className={`${styles.main} play-game`}>
				<div className={`${styles.wrapper}`}>
					<div className={`${styles.info} info-play`}>
						<InfoEnemy />
					</div>
					<div className={`${styles.wrapMap}`}>
						<Image option={{ className: styles.mapImage }} name="/images/play/map.png" />
					</div>
					<div className={`${styles.wrapPlay}`}>
						<div className={`${styles.contentPlay}`}>
							<div className={`${styles.wrapperPlayer} play-content`}>
								<Enemy />
								<Ally />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`${styles.setting} setting-play`}>
				<SettingPlayGame />
			</div>
			{card_attack?.id !== '' && card_defense?.id !== '' && <Action />}
		</>
	);
};

export default memo(Players);
