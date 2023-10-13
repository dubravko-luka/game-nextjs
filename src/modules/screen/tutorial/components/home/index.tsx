import React, { memo } from 'react';
import Map from '@/modules/screen/tutorial/components/map'
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
