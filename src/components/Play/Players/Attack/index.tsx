import React, { memo, useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import { Helmet } from 'react-helmet';
import { setCardAttack, setCardDefense, setIsAttack } from '@/store/actions/attackDefenseAction';
import { cardDefault } from '@/types';

type PropsSkill = {
	src: string;
	dame?: number;
	width?: number;
	height?: number;
	columns?: number;
	rows?: number;
	_scale?: number;
	doneAction?: any;
};

const frameDelay = 70;

const Skill: React.FC<PropsSkill> = ({ src, width = 221, height = 285, columns = 8, rows = 2, _scale = 1 }) => {
	const canvasRef: any = useRef();
	const images = useSelector((state: RootState) => state?.image.images);

	const image = new Image();
	image.src = images.find((img) => img.key === src)?.base64Image ?? '';
	const spriteWidth = width;
	const spriteHeight = height;
	const frameColumns = columns;
	const frameRows = rows;
	let currentFrame = 0;
	let currentRows = 0;
	const scale = _scale;

	useEffect(() => {
		if (canvasRef && canvasRef.current) {
			const canvas = canvasRef.current;
			const ctx = canvas.getContext('2d');

			const draw = () => {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				ctx.drawImage(
					image,
					currentFrame * spriteWidth,
					currentRows * spriteHeight,
					spriteWidth,
					spriteHeight,
					222 / 2 - (spriteWidth * scale) / 2,
					285 / 2 - (spriteHeight * scale) / 2,
					spriteWidth * scale,
					spriteHeight * scale,
				);

				currentFrame++;
				if (currentFrame > frameColumns) {
					currentRows++;

					// eslint-disable-next-line
					currentFrame = 0;
				}

				if (currentRows < frameRows) {
					setTimeout(() => {
						requestAnimationFrame(draw);
					}, frameDelay);
				}
			};

			draw();
		}
	}, [canvasRef]);

	return (
		<>
			<canvas ref={canvasRef} width="222" height="285"></canvas>
		</>
	);
};

const SkillDefense: React.FC<PropsSkill> = ({
	src,
	width = 221,
	height = 285,
	columns = 8,
	rows = 2,
	_scale = 1,
	dame = 0,
	doneAction,
}) => {
	const [showMinus, setShowMinus] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		const timeOut = setTimeout(() => {
			setShowMinus(true);
			clearTimeout(timeOut);

			// eslint-disable-next-line
		}, columns * frameDelay + 200);

		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		const timeOut = setTimeout(() => {
			dispatch(setCardAttack(cardDefault[0]));
			dispatch(setCardDefense(cardDefault[0]));
			dispatch(setIsAttack(true));
			clearTimeout(timeOut);
			doneAction();

			// eslint-disable-next-line
		}, columns * frameDelay + 1200);

		// eslint-disable-next-line
	}, []);

	return (
		<>
			{showMinus && (
				<Helmet>
					<style>
						{`
              @keyframes shaking {
                0%, 100% {
                  transform: translateX(-5px);
                }
              
                50% {
                  transform: translateX(5px);
                }
              }

              .action-defense {
                animation: shaking .3s linear;
                z-index: -1;
              }

							${
								showMinus
									? `
									.skill-attack {
										display: none;
									}
								`
									: ``
							}
            `}
					</style>
				</Helmet>
			)}
			<div
				style={
					{
						'--width': `${width}px`,
						'--height': `${height}px`,
					} as any
				}
				className={`${styles.wrapper} ${styles.defense} skill-defense`}
			>
				{showMinus ? (
					<div className={`${styles.minus}`}>
						<p className={`${styles._minus}`}>-{dame}</p>
					</div>
				) : (
					<Skill src={src} width={width} height={height} columns={columns} rows={rows} _scale={_scale} />
				)}
			</div>
		</>
	);
};

const SkillAttack: React.FC<PropsSkill> = ({ src, width = 221, height = 285, columns = 8, rows = 2, _scale = 1 }) => {
	return (
		<>
			<div
				style={
					{
						'--width': `${width}px`,
						'--height': `${height}px`,
					} as any
				}
				className={`${styles.wrapper} ${styles.attack} skill-attack`}
			>
				<Skill src={src} width={width} height={height} columns={columns} rows={rows} _scale={_scale} />
			</div>
		</>
	);
};

interface IAttack {
	src: string;
	card?: any;
	defenseDelay?: number;
	rows: number;
	columns: number;
	doneAction: () => void;
}

type PropsAttack = {
	attack: IAttack;
	defense: IAttack;
};

const Attack: React.FC<PropsAttack> = ({ attack, defense }) => {
	return (
		<>
			<SkillAttack src={attack.src} rows={attack.rows} columns={attack.columns} _scale={0.5} />
			<SkillDefense
				doneAction={defense.doneAction}
				dame={attack?.card?.dame}
				src={defense.src}
				rows={defense.rows}
				columns={defense.columns}
			/>
		</>
	);
};

export default memo(Attack);
