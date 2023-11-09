import React, { memo, useEffect, useState } from 'react';
import styles from './styles.module.css';
import Icon from '@/components/Icons/1';
import { ICON_1_ENUM, PLAY_ENUM_SOCKET, SCREEN_ENUM } from '@/types/enum';
import { useDispatch, useSelector } from 'react-redux';
import { setScreen } from '@/store/actions/screenAction';
import LayoutScreen from '@/components/Common/LayoutScreen';
import Image from '@/components/Image';
import { usePlayWebSocket } from '@/hooks/usePlayWebSocket';
import { generateRandomString } from '@/utils';
import Copy from '@/components/Copy';
import { useWebSocket } from '@/hooks/useWebSocket';
import { jsonToWebsocket } from '@/utils/websocket';

type Props = {
	//
};

const HomeTutorial: React.FC<Props> = () => {
	const dispath = useDispatch();

	const { initSocket } = usePlayWebSocket();
	const { sendMessage } = useWebSocket()
	const [userId] = useState(generateRandomString(8))

	const [room, setRoom] = useState('')
	const [roomId, setRoomId] = useState('')

	const startPlay = async () => {
		const randRoom = await generateRandomString(8)
		await initSocket(randRoom, PLAY_ENUM_SOCKET.CREATE, userId)
		setRoomId(randRoom)
	}

	const connectRoom = async () => {
		await initSocket(room, PLAY_ENUM_SOCKET.JOIN, userId)
	}

	return (
		<>
			<div className={`${styles.header}`} onClick={() => dispath(setScreen(SCREEN_ENUM.HOME))}>
				<Icon icon={ICON_1_ENUM.EXISTS} />
			</div>
			<div className={`${styles.rightMenu}`}>
				<input
					onChange={(e: any) => {
						setRoom(e.target.value)
					}}
					className={styles.inputRoom}
					type="text"
				/>
				<div onClick={connectRoom}>
					<Icon icon={ICON_1_ENUM.SEARCH} />
				</div>
			</div>
			<div className={`${styles.idRoom}`}>
				<p>
					{roomId
						? (
							<span className='flex gap-5'>
								<span className='opacity-50'>Room ID:</span>
								<Copy value={roomId}>
									<span className={styles.roomId}>{roomId}</span>
								</Copy>
							</span>
						)
						: ''}
				</p>
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
						<div
							className={`${styles.startBtn}`}
							onClick={startPlay}
						>
							<button className={styles._startBtn}>
								CREATE BATTLE
							</button>
						</div>
					</div>
				</div>
			</LayoutScreen>
		</>
	);
};

export default memo(HomeTutorial);
