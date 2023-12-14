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
import { useWebSocket } from '@/hooks/useWebSocket';

type PropsSurrender = {
	onSurrender: () => void;
};

const Surrender: React.FC<PropsSurrender> = ({ onSurrender }) => {
	return (
		<div className={`${stylesComponent.column}`}>
			<p className={`${stylesComponent.titleSetting}`}>&nbsp;</p>
			<div className={`${stylesComponent.action}`}>
				<div className={`${styles.button}`}>
					<button className={`${styles.buttonSurrender}`} onClick={onSurrender}>
						Surrender
					</button>
				</div>
			</div>
		</div>
	);
};

type Props = {
	//
};

const Setting: React.FC<Props> = () => {
	const dispatch = useDispatch();

	const settingShow = useSelector((state: RootState) => state.setting.show);
	const { surrender } = useWebSocket();

	const onSurrender = () => {
		dispatch(setScreen(SCREEN_ENUM.HOME));
		dispatch(setShowSetting(false));
		surrender();
	};

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
					<div>
						<Surrender onSurrender={onSurrender} />
					</div>
				</SettingScreen>
			)}
		</>
	);
};

export default memo(Setting);
