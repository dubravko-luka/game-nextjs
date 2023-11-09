import React, { memo, useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import Position from '../../Position';
import { PLAYER_ENUM, PLAY_ENUM_SOCKET } from '@/types/enum';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import {
	setCardFour,
	setCardMain,
	setCardOne,
	setCardReserve,
	setCardReserveSelected,
	setCardThree,
	setCardTwo,
	setManaAlly,
} from '@/store/actions/allyAction';
import Image from '@/components/Image';
import { setCardAttack, setTurnEnemy, setYourTurn } from '@/store/actions/attackDefenseAction';
import { cardDefault } from '@/types';
import { jsonToWebsocket } from '@/utils/websocket';
import { useWebSocket } from '@/hooks/useWebSocket';
import { setManaEnemy } from '@/store/actions/enemyAction';

type Props = {
	//
};

const positionPlayer = [
	{
		type: PLAYER_ENUM.PLAYER_1,
		top: '435px',
	},
];

const actionStore = [setCardOne, setCardTwo, setCardMain, setCardThree, setCardFour];

const Ally: React.FC<Props> = () => {
	const { sendMessage } = useWebSocket()
	const dispatch = useDispatch();

	const { card_1, card_2, card_3, card_4, card_main, card_reserve, card_reserve_selected, mana } = useSelector((state: RootState) => state?.ally);
	const { mana: manaEnemy } = useSelector((state: RootState) => state?.enemy);
	const { turnYour, turnEnemy } = useSelector((state: RootState) => state?.attackDefense);
	const { card_attack } = useSelector((state: RootState) => state?.attackDefense);

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
		// END TURN
		const message = jsonToWebsocket({
			type: PLAY_ENUM_SOCKET.END_TURN,
			yourMana: manaEnemy,
			enemyMana: mana
		});
		sendMessage(message);

		dispatch(setYourTurn(!turnYour));
		dispatch(setTurnEnemy(!turnEnemy));
		dispatch(setManaEnemy(manaEnemy + 1))
	};

	const onGotoBattle = (index: number) => {
		// SET CARD TO BATTLE
		if (card_reserve_selected !== -1 && mana !== 0) {
			setAnimation(false);
			dispatch(actionStore[index](card_reserve[card_reserve_selected]));

			let cards: any = { card_1, card_2, card_main, card_3, card_4 }
			let cards_name: any = ['card_1', 'card_2', 'card_main', 'card_3', 'card_4']
			cards[cards_name[index]] = card_reserve[card_reserve_selected]

			const message = jsonToWebsocket({
				type: PLAY_ENUM_SOCKET.GO_TO_BATTLE,
				...cards,
				yourMana: manaEnemy,
				enemyMana: mana - 1
			});
			sendMessage(message);

			// 
			dispatch(setManaAlly(mana - 1))

			// Removes the currently selected card from the queue
			dispatch(setCardReserveSelected(-1));

			// Remove the posted card from the queue
			dispatch(setCardReserve(card_reserve.filter((_, index) => index !== card_reserve_selected)));

			// Animation
			const timeOut = setTimeout(() => {
				clearTimeout(timeOut);
				setAnimation(true);
			}, 300);
		}
	}

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
									// Attack
									if (card_attack?.id === item?.id) {
										dispatch(setCardAttack(cardDefault[0]));
									} else {
										dispatch(setCardAttack(item));
									}
								} else {
									// Go to battle
									onGotoBattle(index)
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
				<p className={`${styles.textMana}`}>{mana}/10</p>
			</div>
		</>
	);
};

export default memo(Ally);
