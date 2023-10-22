import React, { memo } from 'react';
import styles from './styles.module.css';
import stylesComponent from '@/modules/screen/setting/styles-component.module.css';
import Icon from '@/components/Icons/1';
import { ICON_1_ENUM, SCREEN_ENUM } from '@/types/enum';
import { useDispatch } from 'react-redux';
import { setShowSetting } from '@/store/actions/settingAction';
import SettingScreen from '@/modules/screen/setting';
import { setScreen } from '@/store/actions/screenAction';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';

type Props = {
	//
};

const Surrender: React.FC = () => {
	return (
		<div className={`${stylesComponent.column}`}>
			<p className={`${stylesComponent.titleSetting}`}>&nbsp;</p>
			<div className={`${stylesComponent.action}`}>
				<div className={`${styles.button}`}>
					<button className={`${styles.buttonSurrender}`}>Surrender</button>
				</div>
			</div>
		</div>
	);
};

const Setting: React.FC<Props> = () => {
	const dispatch = useDispatch();

	const settingShow = useSelector((state: RootState) => state.setting.show);

	return (
		<>
			<div className={`${styles.wrapper}`}>
				<div className={`${styles.icon}`} onClick={() => dispatch(setShowSetting(true))}>
					<Icon icon={ICON_1_ENUM.SETTING} />
				</div>
			</div>
			{settingShow && (
				<SettingScreen>
					<div></div>
					<div
						onClick={() => {
							dispatch(setScreen(SCREEN_ENUM.HOME));
							dispatch(setShowSetting(false));
						}}
					>
						<Surrender />
					</div>
				</SettingScreen>
			)}
		</>
	);
};

export default memo(Setting);
