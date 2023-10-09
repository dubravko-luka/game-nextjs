import React, { memo } from 'react';
import styles from './styles.module.css'

type Props = {
  //
};

const Sphere: React.FC<Props> = () => {
  return (
    <>
      <div className={`${styles.scene}`}>
        <div className={`${styles.light}`}>
          <div className={`${styles.clip}`}>
            <div className={`${styles.container}`}>

              <div className={`${styles.circle} ${styles.circleBorder}`}></div>
              <div className={`${styles.circle} ${styles.circleBorder}`}></div>
              <div className={`${styles.circle} ${styles.circleBorder}`}></div>
              <div className={`${styles.circle} ${styles.circleBorder}`}></div>
              <div className={`${styles.circle} ${styles.circleBorder}`}></div>

              <div className={`${styles.circle} ${styles.circleBorder}`}></div>
              <div className={`${styles.circle} ${styles.circleBorder}`}></div>
              <div className={`${styles.circle} ${styles.circleBorder}`}></div>
              <div className={`${styles.circle} ${styles.circleBorder}`}></div>
              <div className={`${styles.circle} ${styles.circleBorder}`}></div>

              <div className={`${styles.circle}`}></div>
              <div className={`${styles.circle}`}></div>
              <div className={`${styles.circle}`}></div>
              <div className={`${styles.circle}`}></div>
              <div className={`${styles.circle}`}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Sphere);
