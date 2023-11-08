import React, { memo, useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import Position from '../../Position';
import { PLAYER_ENUM } from '@/types/enum';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import {
	setCardFour,
	setCardOne,
	setCardReserve,
	setCardReserveSelected,
	setCardThree,
	setCardTwo,
} from '@/store/actions/allyAction';
import Image from '@/components/Image';
import { setCardAttack, setTurnEnemy, setYourTurn } from '@/store/actions/attackDefenseAction';
import { cardDefault } from '@/types';
import { jsonToWebsocket } from '@/utils/websocket';
import { useWebSocket } from '@/hooks/useWebSocketPlay';

type Props = {
	//
};

const positionPlayer = [
	{
		type: PLAYER_ENUM.PLAYER_1,
		top: '435px',
	},
];

const actionStore = [setCardOne, setCardTwo, setCardThree, setCardFour];

const Ally: React.FC<Props> = () => {
	const { sendMessage } = useWebSocket();
	const { card_1, card_2, card_3, card_4, card_main, card_reserve, card_reserve_selected } = useSelector(
		(state: RootState) => state?.ally,
	);
	const { turnYour, turnEnemy } = useSelector((state: RootState) => state?.attackDefense);
	const { card_attack } = useSelector((state: RootState) => state?.attackDefense);
	const dispatch = useDispatch();

	// ------------
	const refCardReserve: any = useRef();
	const [animaion, setAnimation] = useState(true);

	const resetCardReserveSelected = () => {
		dispatch(setCardReserveSelected(-1));
	};

	const handleClickOutsideCard = (event: any, ref: any, action: any) => {
		if (ref.current && !ref.current.contains(event.target)) {
			action();
		}
	};

	useEffect(() => {
		document.addEventListener('click', (e) => handleClickOutsideCard(e, refCardReserve, resetCardReserveSelected));
		return () => {
			document.removeEventListener('click', (e) => handleClickOutsideCard(e, refCardReserve, resetCardReserveSelected));
		};
		// eslint-disable-next-line
	}, [refCardReserve]);

	const endTurn = () => {
		const message = jsonToWebsocket({
			turn: 'reverse-turn',
			yourTurn: turnYour ? true : false,
			enemyTurn: turnEnemy ? true : false,
		});
		dispatch(setYourTurn(false));
		dispatch(setTurnEnemy(true));
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
							if (turnYour) {
								if (item !== undefined && item?.id !== '') {
									if (card_attack?.id === item?.id) {
										dispatch(setCardAttack(cardDefault[0]));
									} else {
										dispatch(setCardAttack(item));
									}
								} else {
									if (index !== 2) {
										setAnimation(false);
										if (index > 2) {
											dispatch(actionStore[index - 1](card_reserve[card_reserve_selected]));
											const message = jsonToWebsocket({
												turn: 'change-card',
												card_1,
												card_2,
												card_3: index === 3 ? card_reserve[card_reserve_selected] : card_3,
												card_4: index === 4 ? card_reserve[card_reserve_selected] : card_4,
											});
											sendMessage(message);
										} else {
											dispatch(actionStore[index](card_reserve[card_reserve_selected]));
											const message = jsonToWebsocket({
												turn: 'change-card',
												card_3,
												card_4,
												card_1: index === 0 ? card_reserve[card_reserve_selected] : card_1,
												card_2: index === 1 ? card_reserve[card_reserve_selected] : card_2,
											});
											sendMessage(message);
										}
										dispatch(setCardReserveSelected(-1));
										dispatch(setCardReserve(card_reserve.filter((_, index) => index !== card_reserve_selected)));
										const timeOut = setTimeout(() => {
											clearTimeout(timeOut);
											setAnimation(true);
										}, 300);
									}
								}
							}
						}}
					>
						<Position
							selected={card_attack?.src !== '' && card_attack?.id === item?.id && card_attack?.type === item?.type}
							card={item}
							isMain={index === 2}
						/>
					</div>
				))}
			</div>
			{/* Card Reserve */}
			<div className={`${styles.cardReserves}`} ref={refCardReserve}>
				{card_reserve?.map((item, index) => (
					<div
						style={{ transition: animaion ? 'all .3s linear' : 'unset' }}
						key={index}
						className={`${styles.cardReserveWrap} ${card_reserve_selected === index ? styles.selected : ''}`}
						onClick={() => {
							dispatch(setCardReserveSelected(index));
						}}
					>
						<Image option={{ className: styles.imageReserve }} name={item.src} />
					</div>
				))}
			</div>
			{/* Unknown card */}
			<div className={`${styles.unknownCard}`}>
				<div className={`${styles.unknownCardContent}`}>
					<Image option={{ className: styles.imageReserve }} name={'/images/play/back-card.png'} />
				</div>
			</div>

			{/* Enturn */}
			{turnYour && (
				<div className={`${styles.btnEndturn}`} onClick={endTurn}>
					<button className={styles.endturnButton}>END TURN</button>
				</div>
			)}

			{/* Mana */}
			<div className={`${styles.manaWrap}`}>
				<p className={`${styles.textMana}`}>1/10</p>
			</div>
		</>
	);
};

export default memo(Ally);
