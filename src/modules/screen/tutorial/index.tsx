import React, { memo } from 'react';
import Home from './components/home';
import styles from './styles.module.css';

type Props = {
	//
};

const RankedScreen: React.FC<Props> = () => {
	return (
		<>
			<div className={`${styles.wrapper}`}>
				<Home />
			</div>
		</>
	);
};

export default memo(RankedScreen);
