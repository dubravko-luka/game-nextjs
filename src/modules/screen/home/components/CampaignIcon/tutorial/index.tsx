import React, { memo, useEffect, useState } from 'react';
import styles from './styles.module.css'
import Image from '@/components/Image';

type Props = {
  //
};

const CampaignIconTutorial: React.FC<Props> = () => {

  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.wrapImg} ${styles.img_1}`}>
          <Image name='/images/cards/blessing.png' option={{ className: `${styles.img}` }} />
        </div>
        <div className={`${styles.wrapImg} ${styles.img_2}`}>
          <Image name='/images/cards/jormungandr.png' option={{ className: `${styles.img}` }} />
        </div>
        <div className={`${styles.wrapImg} ${styles.img_3}`}>
          <Image name='/images/cards/takeit.png' option={{ className: `${styles.img}` }} />
        </div>
      </div>
    </>
  );
};

export default memo(CampaignIconTutorial);
