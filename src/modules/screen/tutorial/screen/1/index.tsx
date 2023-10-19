import React, { memo } from 'react';
import styles from './styles.module.css'
import Image from '@/components/Image';
import Position from '@/components/Play/Position';
import Players from '@/components/Play/Players';
import { PLAYER_ENUM } from '@/types/enum';

type Props = {
  //
};

const TutorialScreen_1: React.FC<Props> = () => {
  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.wrapMap}`}>
          <Image option={{ className: styles.mapImage }} name='/images/play/map.png' />
        </div>
        <div className={`${styles.wrapPlay}`}>
          <div className={`${styles.contentPlay}`}>
            <Players />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(TutorialScreen_1);
