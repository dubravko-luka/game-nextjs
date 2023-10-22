import React, { memo } from 'react';
import Home from './components/home';

type Props = {
	//
};

const RankedScreen: React.FC<Props> = () => {
	return (
		<>
			<Home />
		</>
	);
};

export default memo(RankedScreen);
