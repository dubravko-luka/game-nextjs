import React, { memo } from 'react';
import styles from './styles.module.css'
import Image from '@/components/Image';

type Props = {
  //
};

const Cloud: React.FC<Props> = () => {

  return (
    <>
      <div className={`${styles.cloud}`}>
        <Image name='/images/tutorial/cloud-1.png' option={{ className: `${styles.cloud1} ${styles.cloudImg}` }} />
        <Image name='/images/tutorial/cloud-1.png' option={{ className: `${styles.cloud2} ${styles.cloudImg}` }} />
        <Image name='/images/tutorial/cloud-1.png' option={{ className: `${styles.cloud3} ${styles.cloudImg}` }} />
        <Image name='/images/tutorial/cloud-1.png' option={{ className: `${styles.cloud4} ${styles.cloudImg}` }} />
      </div>
    </>
  );
};

export default memo(Cloud);
