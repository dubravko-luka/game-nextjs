import React, { memo } from 'react';
import styles from './styles.module.css'
import Icon from '@/components/Icons/1'
import { ICON_1_ENUM, SCREEN_ENUM } from '@/types/enum';
import { useDispatch } from 'react-redux';
import { setScreen } from '@/store/actions/screenAction';
import { setShowSetting } from '@/store/actions/settingAction';

type Props = {
  //
};

const MenuHome: React.FC<Props> = () => {

  const dispatch = useDispatch();

  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div onClick={() => dispatch(setScreen(SCREEN_ENUM.MAILBOX))}>
          <Icon icon={ICON_1_ENUM.LETTER} />
        </div>
        <div onClick={() => dispatch(setShowSetting(true))}>
          <Icon icon={ICON_1_ENUM.SETTING} />
        </div>
      </div>
    </>
  );
};

export default memo(MenuHome);
