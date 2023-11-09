import React, { memo } from 'react';
import styles from './styles.module.css';
import Position from '../../Position';
import { PLAYER_ENUM, PLAY_ENUM_SOCKET } from '@/types/enum';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import Image from '@/components/Image';
import { setCardDefense, setIsAttack } from '@/store/actions/attackDefenseAction';
import { jsonToWebsocket } from '@/utils/websocket';
import { useWebSocket } from '@/hooks/useWebSocket';

type Props = {};

const positionPlayer = [
	{
		type: PLAYER_ENUM.PLAYER_2,
		top: '51px',
	},
];

const Enemy: React.FC<Props> = () => {
	const { card_1, card_2, card_3, card_4, card_main, mana } = useSelector((state: RootState) => state?.enemy);
	const { card_attack, card_defense } = useSelector((state: RootState) => state?.attackDefense);

	const dispatch = useDispatch();
	const { sendMessage } = useWebSocket();

	const defense = (item: any) => {
		dispatch(setCardDefense(item));
		dispatch(setIsAttack(true));
		const message = jsonToWebsocket({
			type: PLAY_ENUM_SOCKET.ATTACK,
			card_defense: card_attack,
			card_attack: item,
		});
		sendMessage(message);
	};

	return (
		<>
			<div
				className={`${styles.wrapperPlayer}`}
				style={
					{
						'--top': positionPlayer[0]?.top,
					} as any
				}
			>
				{[card_1, card_2, card_main, card_3, card_4].map((item, index) => (
					<div
						key={index}
						onClick={() => {
							if (card_attack?.id !== '' && card_defense.id === '' && item !== undefined && item?.src !== '') {
								defense(item);
							}
						}}
					>
						<Position card={item} isMain={index === 2} />
					</div>
				))}
			</div>
			{/* Card Reserve */}
			<div className={`${styles.cardReserves}`}>
				{[1, 2, 3, 4]?.map((item, index) => (
					<div key={index} className={`${styles.cardReserveWrap}`}>
						<Image option={{ className: styles.imageReserve }} name={'/images/play/back-card-enemy.png'} />
					</div>
				))}
			</div>
			{/* Unknown card */}
			<div className={`${styles.unknownCard}`}>
				<div className={`${styles.unknownCardContent}`}>
					<Image option={{ className: styles.imageReserve }} name={'/images/play/back-card.png'} />
				</div>
			</div>

			{/* Mana */}
			<div className={`${styles.manaWrap}`}>
				<p className={`${styles.textMana}`}>{mana}/10</p>
			</div>
		</>
	);
};

export default memo(Enemy);
