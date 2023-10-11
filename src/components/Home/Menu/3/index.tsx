import React, { memo } from 'react';
import styles from './styles.module.css'
import Icon from '@/components/Icons/1'
import { ICON_1_ENUM } from '@/types/enum';

type Props = {
  //
};

const MenuHome: React.FC<Props> = () => {
  return (
    <>
      <div className={`${styles.wrapper}`}>
        <Icon icon={ICON_1_ENUM.LETTER} />
        <Icon icon={ICON_1_ENUM.SETTING} />
      </div>
    </>
  );
};

export default memo(MenuHome);
