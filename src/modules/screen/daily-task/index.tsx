import React, { memo } from 'react';
import styles from './styles.module.css'
import { useDispatch } from 'react-redux';
import { setScreen } from '@/store/actions/screenAction';
import { ICON_1_ENUM, SCREEN_ENUM } from '@/types/enum';
import Icon from '@/components/Icons/1'
import LayoutScreen from '@/components/Common/LayoutScreen';
import DailyTask from './components/daily-task';

type Props = {
  //
};

const ActivityScreen: React.FC<Props> = () => {

  const dispath = useDispatch()

  return (
    <>
      <div className={`${styles.header}`} onClick={() => dispath(setScreen(SCREEN_ENUM.HOME))}>
        <Icon icon={ICON_1_ENUM.EXISTS} />
      </div>
      <LayoutScreen>
        <div className={`${styles.content}`}>
          <div className={`${styles.title}`}>
            <p className={`${styles._title}`}>DAILY TASKS</p>
          </div>
          <div className={`${styles.contentDaily}`}>
            <DailyTask />
          </div>
        </div>
      </LayoutScreen>
    </>
  );
};

export default memo(ActivityScreen);
