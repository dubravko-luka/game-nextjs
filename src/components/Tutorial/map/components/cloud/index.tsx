import React, { memo } from 'react';
import styles from './styles.module.css'

type Props = {
  //
};

const Cloud: React.FC<Props> = () => {
  return (
    <>
      <div className={`${styles.cloud}`}>
        <img src="/images/tutorial/cloud-1.png" alt="" className={`${styles.cloud1} ${styles.cloudImg}`} />
        <img src="/images/tutorial/cloud-1.png" alt="" className={`${styles.cloud2} ${styles.cloudImg}`} />
        <img src="/images/tutorial/cloud-1.png" alt="" className={`${styles.cloud3} ${styles.cloudImg}`} />
        <img src="/images/tutorial/cloud-1.png" alt="" className={`${styles.cloud4} ${styles.cloudImg}`} />
      </div>
    </>
  );
};

export default memo(Cloud);
