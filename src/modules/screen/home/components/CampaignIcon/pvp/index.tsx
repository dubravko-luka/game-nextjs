import React, { memo, useEffect, useState } from 'react';
import styles from './styles.module.css'

type Props = {
  //
};

const CampaignIconPVP: React.FC<Props> = () => {

  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.wrapImg} ${styles.img_1}`}>
          <img className={styles.img} src="/images/cards/hero/mei.png" alt="" />
        </div>
        <div className={`${styles.wrapImg} ${styles.img_2}`}>
          <img className={`${styles.img}`} src="/images/cards/hero/thomas.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default memo(CampaignIconPVP);
