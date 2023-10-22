import React, { memo, useEffect, useState } from 'react';
import styles from './styles.module.css';
import Position from '../../Position';
import Attack from '../Attack';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';

type Props = {
	//
};

const Action: React.FC<Props> = () => {
	const [showSkill, setShowSkill] = useState(false);
	const { isAttack, card_attack, card_defense } = useSelector((state: RootState) => state?.attackDefense);

	useEffect(() => {
		const timeOut = setTimeout(() => {
			clearTimeout(timeOut);
			setShowSkill(true);
		}, 1200);
	}, []);

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
								rows: 1,
								columns: 8,
							}}
							defense={{
								src: '/images/skills/skill-1.png',
								rows: 1,
								columns: 8,
							}}
						/>
					)}
				</div>
			</div>
		</>
	);
};

export default memo(Action);
