import React, { memo, useState } from 'react';
import styles from './styles.module.css';
import SettingPlayGame from './Setting';
import Ally from './Ally';
import Enemy from './Enemy';
import Image from '@/components/Image';
import InfoEnemy from './Enemy/Info';
import Action from './Action';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import { useWebSocket, useWebSocketInit } from '@/hooks/useWebSocketPlay';
import { jsonToWebsocket } from '@/utils/websocket';

type Props = {
	//
};

const Players: React.FC<Props> = () => {
	const { card_attack, card_defense, ready } = useSelector((state: RootState) => state?.attackDefense);
	const [showReady, setShowReady] = useState(true);

	useWebSocketInit();
	const { sendMessage } = useWebSocket();

	return (
		<>
			{ready.length < 2 || ready[0] === false || ready[1] === false ? (
				<div className={`${styles.play}`}>
					{showReady ? (
						<button
							className={styles.btnPlay}
							onClick={() => {
								const message = jsonToWebsocket({
									turn: 'check-turn',
								});
								sendMessage(message);
								setShowReady(false);
							}}
						>
							READY
						</button>
					) : (
						<></>
					)}
				</div>
			) : (
				<></>
			)}
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
