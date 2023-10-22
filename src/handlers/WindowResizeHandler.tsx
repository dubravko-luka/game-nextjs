import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHeight, setWidth } from '@/store/actions/windowAction';
import { RootState } from '@/store/types';

const WindowResizeHandler = () => {
	const dispatch = useDispatch();
	const width = useSelector((state: RootState) => state?.window.width);

	useEffect(() => {
		const handleResize = () => {
			const newWidth = window.innerWidth;
			const newHeight = window.innerHeight;
			dispatch(setWidth(Number(newWidth)));
			dispatch(setHeight(Number(newHeight)));
		};

		if (width === 0) {
			dispatch(setWidth(Number(window.innerWidth)) as any);
			dispatch(setHeight(Number(window.innerHeight)) as any);
		}

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};

		// eslint-disable-next-line
	}, []);

	return null;
};

export default WindowResizeHandler;
