import React, { memo, useEffect, useState } from 'react';
import styles from './styles.module.css'

type Props = {
  //
};

const CampaignIconTutorial: React.FC<Props> = () => {

  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.wrapImg} ${styles.img_1}`}>
          <img className={styles.img} src="/images/cards/blessing.png" alt="" />
        </div>
        <div className={`${styles.wrapImg} ${styles.img_2}`}>
          <img className={`${styles.img}`} src="/images/cards/jormungandr.png" alt="" />
        </div>
        <div className={`${styles.wrapImg} ${styles.img_3}`}>
          <img className={`${styles.img}`} src="/images/cards/takeit.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default memo(CampaignIconTutorial);
