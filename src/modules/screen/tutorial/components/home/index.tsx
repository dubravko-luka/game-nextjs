import React, { memo } from 'react';
import styles from './styles.module.css'
import Map from '../map';

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
