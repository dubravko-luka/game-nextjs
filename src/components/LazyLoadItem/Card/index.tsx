import React, { memo, useEffect, useRef } from 'react';
import styles from './styles.module.css';

type Props = {
	children?: React.ReactNode;
	list: any[];
	visibleDivs: any[];
	setVisibleDivs: any;
};

const LazyLoadCard: React.FC<Props> = ({ children, list, visibleDivs, setVisibleDivs }) => {
	const containerRef: any = useRef(null);

	useEffect(() => {
		const container = containerRef.current;
		const handleScroll = () => {
			const containerRect = container.getBoundingClientRect();
			if (containerRect.width !== 0 && containerRect.height !== 0) {
				const divs = container.querySelectorAll('.item-game');
				const inViewDivs: any = [];

				divs.forEach((div: any, index: any) => {
					const divRect = div.getBoundingClientRect();

					if (divRect.top >= containerRect.top - 140 && divRect.bottom <= containerRect.bottom + 140) {
						inViewDivs.push(index);
					}
				});
				setVisibleDivs(inViewDivs);
			}
		};

		container.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => {
			container.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		if (list.length > 28) {
			setVisibleDivs(Array.from({ length: 28 }, (_, index) => index));
		} else {
			setVisibleDivs(Array.from({ length: list.length }, (_, index) => index));
		}
	}, [list]);

	return (
		<>
			<div className={`${styles.content} no-sb`} ref={containerRef}>
				{children}
			</div>
		</>
	);
};

export default memo(LazyLoadCard);
