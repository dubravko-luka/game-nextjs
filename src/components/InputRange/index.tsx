import React, { memo, useState } from 'react';
import styles from './styles.module.css';

type Props = {
	//
};

const InputRange: React.FC<Props> = () => {
	const [value, setValue] = useState(100);

	const onChangeInput = (e: any) => {
		setValue(Number(e.target.value));
	};

	return (
		<>
			<div
				className={styles.slider}
				style={
					{
						'--slider-value': (100 * value) / (100 - 0),
					} as any
				}
			>
				<div className={styles.sliderTrack}>
					<input onChange={onChangeInput} className={styles.sliderInput} type="range" min={0} max={100} value={value} />
					<div className={styles.sliderThumb}>
						<div className={styles.sliderThumbSide}></div>
						<div className={styles.sliderThumbMiddle}></div>
						<div className={styles.sliderThumbSide}></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default memo(InputRange);
