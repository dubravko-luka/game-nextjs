import React, { memo } from 'react';
import styles from './styles.module.css'
import { ICON_2_ENUM } from '@/types/enum';

type Props = {
  icon: ICON_2_ENUM
};

const Icon: React.FC<Props> = ({ icon }) => {

  // 

  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div
          className={`${styles.icon}`}
          style={{
            '--left': `-${JSON.parse(icon)[0] * 70}px`,
            '--top': `${-JSON.parse(icon)[1] * 72}px`
          } as any}
        >
          <img className={styles.imgIcon} src="/images/icons/icon-game-2.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default memo(Icon);
