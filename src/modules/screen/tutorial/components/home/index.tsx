import React, { memo } from 'react';
import Map from '@/components/Tutorial/map'
import styles from './styles.module.css'

type Props = {
  //
};

const HomeTutorial: React.FC<Props> = () => {
  return (
    <>
      <div className={`${styles.wrapper}`}>
        <Map />
      </div>
    </>
  );
};

export default memo(HomeTutorial);
