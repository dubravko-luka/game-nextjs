import React, { memo } from 'react';
import styles from './styles.module.css'
import { useDispatch } from 'react-redux';
import { setScreen } from '@/store/actions/screenAction';
import { ICON_1_ENUM, SCREEN_ENUM } from '@/types/enum';
import Icon from '@/components/Icons/1'
import LayoutScreen from '@/components/Common/LayoutScreen';
import Tab from './components/tab';
import Items from './components/items';

type Props = {
  //
};

const KnapsackScreen: React.FC<Props> = () => {

  const dispath = useDispatch()

  return (
    <>
      <div className={`${styles.header}`} onClick={() => dispath(setScreen(SCREEN_ENUM.HOME))}>
        <Icon icon={ICON_1_ENUM.EXISTS} />
      </div>
      <LayoutScreen>
        <div className={`${styles.content}`}>
          <div className={`${styles.tab}`}>
            <Tab />
          </div>

          <div className={`${styles.items}`}>
            <Items />
          </div>

          <div className={`${styles.itemDetail}`}>
            {/* <Tab /> */}
          </div>
        </div>
      </LayoutScreen>
    </>
  );
};

export default memo(KnapsackScreen);
