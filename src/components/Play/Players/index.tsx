import React, { memo } from 'react';
import styles from './styles.module.css'
import { PLAYER_ENUM } from '@/types/enum';
import _ from 'lodash';
import Ally from './Ally';
import Enemy from './Enemy';

type Props = {
  // 
};

const Players: React.FC<Props> = () => {
  return (
    <>
      <div className={`${styles.wrapper}`}>
        <Enemy />
        <Ally />
      </div>
    </>
  );
};

export default memo(Players);
