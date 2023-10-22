import React, { memo, useState } from 'react';
import styles from './styles.module.css';
import { ButtonMain, ButtonLeft, ButtonRight } from '@/modules/screen/home/components/ButtonMain';
import CamPaignIconPVP from './components/CampaignIcon/pvp';
import CamPaignIconTutorial from './components/CampaignIcon/tutorial';
import CamPaignIconRanked from './components/CampaignIcon/ranked';
import { MODE_GAME, SCREEN_ENUM } from '@/types/enum';
import { useDispatch, useSelector } from 'react-redux';
import { setScreen } from '@/store/actions/screenAction';
import MenuHomeLeft from '@/modules/screen/home/components/Menu/1';
import MenuHomeRight from '@/modules/screen/home/components/Menu/2';
import MenuSetting from '@/modules/screen/home/components/Menu/3';
import Player from '@/components/Player';
import Image from '@/components/Image';
import { RootState } from '@/store/types';
import SettingScreen from '@/modules/screen/setting';

type Props = {
	//
};

const modeGame = [
	{
		mode: MODE_GAME.RANKED,
		name: 'RANKED BATTLE',
		screen: SCREEN_ENUM.RANKED,
		component: <CamPaignIconRanked />,
	},
	{
		mode: MODE_GAME.PVP,
		name: 'PvP',
		screen: SCREEN_ENUM.PVP,
		component: <CamPaignIconPVP />,
	},
	{
		mode: MODE_GAME.TUTORIAL,
		name: 'TUTORIAL',
		screen: SCREEN_ENUM.TUTORIAL,
		component: <CamPaignIconTutorial />,
	},
];

const HomeScreen: React.FC<Props> = () => {
	const [mode, setMode] = useState<number>(0);
	const dispath = useDispatch();

	const settingShow = useSelector((state: RootState) => state?.setting.show);

	return (
		<>
			<div className={`${styles.wrapper}`}>
				<Image name="/images/home/background.jpeg" option={{ className: `${styles.imgBackground}` }} />
				{/*  */}
				<div className={`${styles.player}`}>
					<Player />
				</div>
				<div className={`${styles.setting}`}>
					<MenuSetting />
				</div>
				<div className={`${styles.leftMenu}`}>
					<MenuHomeLeft />
				</div>
				<div className={`${styles.rightMenu}`}>
					<MenuHomeRight />
				</div>
				{/*  */}
				<div className={`${styles.campaignIcon}`}>{modeGame[mode].component}</div>
				{/*  */}
				<div className={`${styles.buttonMain}`} onClick={() => dispath(setScreen(modeGame[mode].screen))}>
					<div className={`${styles._buttonMain}`}>
						<ButtonMain />
						<div className={`${styles.btnGroup}`}>
							<div className={`${styles._btnGroup}`}>
								<button className={styles.btnMain}>{modeGame[mode].name}</button>
							</div>
						</div>
					</div>
				</div>
				<div
					className={`${styles.buttonLeft}`}
					onClick={() => {
						if (mode === 0) {
							setMode(modeGame.length - 1);
						} else {
							setMode(mode - 1);
						}
					}}
				>
					<ButtonLeft />
				</div>
				<div
					className={`${styles.buttonRight}`}
					onClick={() => {
						if (mode === modeGame.length - 1) {
							setMode(0);
						} else {
							setMode(mode + 1);
						}
					}}
				>
					<ButtonRight />
				</div>
			</div>

			{settingShow && <SettingScreen />}
		</>
	);
};

export default memo(HomeScreen);
