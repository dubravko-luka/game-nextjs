import React, { memo, useEffect, useState } from 'react';
import styles from './styles.module.css';
import Position from '../../Position';
import Attack from '../Attack';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/types';

import { setCardFour, setCardMain, setCardOne, setCardThree, setCardTwo } from '@/store/actions/allyAction';

import {
	setCardFour as setCardFourEnemy,
	setCardMain as setCardMainEnemy,
	setCardOne as setCardOneEnemy,
	setCardThree as setCardThreeEnemy,
	setCardTwo as setCardTwoEnemy,
} from '@/store/actions/enemyAction';
import _ from 'lodash';
import { cardDefault } from '@/types';

type Props = {
	//
};

const actionStore = [setCardOne, setCardTwo, setCardMain, setCardThree, setCardFour];
const actionEnemyStore = [setCardOneEnemy, setCardTwoEnemy, setCardMainEnemy, setCardThreeEnemy, setCardFourEnemy];

const Action: React.FC<Props> = () => {
	const [showSkill, setShowSkill] = useState(false);
	const dispatch = useDispatch();
	const { isAttack, card_attack, card_defense } = useSelector((state: RootState) => state?.attackDefense);
	const { card_1, card_2, card_3, card_4, card_main } = useSelector((state: RootState) => state?.ally);
	const {
		card_1: card_1_enemy,
		card_2: card_2_enemy,
		card_3: card_3_enemy,
		card_4: card_4_enemy,
		card_main: card_main_enemy,
	} = useSelector((state: RootState) => state?.enemy);

	useEffect(() => {
		const timeOut = setTimeout(() => {
			clearTimeout(timeOut);
			setShowSkill(true);
		}, 1200);
	}, []);

	const onDoneAction = () => {
		if (!isAttack) {
			const cards = [card_1, card_2, card_main, card_3, card_4];
			const index = _.findIndex(cards, { id: card_attack.id });

			if (card_defense.dame >= card_attack.hp) {
				dispatch(actionStore[index](cardDefault[0]));
			} else {
				dispatch(
					actionStore[index]({
						...card_attack,
						hp: card_attack.hp - card_defense.dame,
					}),
				);
			}
		}

		if (isAttack) {
			const cards = [card_1_enemy, card_2_enemy, card_main_enemy, card_3_enemy, card_4_enemy];
			const index = _.findIndex(cards, { id: card_defense.id });

			if (card_attack.dame >= card_defense.hp) {
				dispatch(actionEnemyStore[index](cardDefault[0]));
			} else {
				dispatch(
					actionEnemyStore[index]({
						...card_defense,
						hp: card_defense.hp - card_attack.dame,
					}),
				);
			}
		}
	};

	return (
		<>
			<Helmet>
				<style>{`
          ${
						!isAttack &&
						`
            .skill-defense {
              left: 0!important;
              right: unset!important;
            }
    
            .skill-attack {
              right: 120px!important;
              left: unset!important;
            }
          `
					}

        .play-game .info-play, .play-game .play-content, .play-game .setting-play {
          opacity: 0;
        }
      `}</style>
			</Helmet>
			<div className={`${styles.wrapper}`}>
				<div className={`${styles.content}`}>
					<div className={`${styles.wrapperAlly}`}>
						<Position card={card_attack} />
					</div>
					<div className={`${styles.wrapperEnemy} action-defense`}>
						<Position card={card_defense} />
					</div>
					{showSkill && (
						<Attack
							attack={{
								src: '/images/skills/skill-1.png',
								card: !isAttack ? card_defense : card_attack,
								rows: 1,
								columns: 8,
								doneAction: onDoneAction,
							}}
							defense={{
								src: '/images/skills/skill-1.png',
								card: !isAttack ? card_attack : card_defense,
								rows: 1,
								columns: 8,
								doneAction: onDoneAction,
							}}
						/>
					)}
				</div>
			</div>
		</>
	);
};

export default memo(Action);
