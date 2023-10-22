import LoadData from '@/modules/load-data';
import RouterScreen from '@/modules/router-screen';
import React, { memo, useState } from 'react';

const HomePage: React.FC = () => {
	const [loaded, setLoaded] = useState(false);

	return <>{loaded ? <RouterScreen /> : <LoadData setLoaded={setLoaded} />}</>;
};

export default memo(HomePage);
