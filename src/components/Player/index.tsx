import React, { memo } from 'react';
import styles from './styles.module.css';
import Image from '@/components/Image';

export const Avatar: React.FC = () => {
	return (
		<>
			<div className={`${styles.avatarWrapper}`}>
				<Image name={'/images/cards/pieces/allian-pieces.png'} option={{ className: `${styles.avatar}` }} />
			</div>
		</>
	);
};

type Props = {
	//
};

const Player: React.FC<Props> = () => {
	return (
		<>
			<Avatar />
		</>
	);
};

export default memo(Player);
