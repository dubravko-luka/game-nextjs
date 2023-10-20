import React, { memo } from 'react';
import styles from './styles.module.css'
import SettingPlayGame from './Setting'
import _ from 'lodash';
import Ally from './Ally';
import Enemy from './Enemy';
import Image from '@/components/Image';
import InfoEnemy from './Enemy/Info';

type Props = {
  // 
};

const Players: React.FC<Props> = () => {

  return (
    <>
      <div className={`${styles.wrapper}`}>
        <InfoEnemy />
        <div className={`${styles.wrapMap}`}>
          <Image option={{ className: styles.mapImage }} name='/images/play/map.png' />
        </div>
        <div className={`${styles.wrapPlay}`}>
          <div className={`${styles.contentPlay}`}>
            <div className={`${styles.wrapperPlayer}`}>
              <Enemy />
              <Ally />
            </div>
          </div>
        </div>
      </div>
      <SettingPlayGame />
    </>
  );
};

export default memo(Players);
