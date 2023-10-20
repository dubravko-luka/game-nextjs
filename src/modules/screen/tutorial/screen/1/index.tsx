import React, { memo } from 'react';
import styles from './styles.module.css'
import Players from '@/components/Play/Players';

type Props = {
  //
};

const TutorialScreen_1: React.FC<Props> = () => {
  return (
    <>
      <Players />
    </>
  );
};

export default memo(TutorialScreen_1);
