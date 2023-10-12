import React, { memo } from 'react';
import styles from './styles.module.css'
import Image from '@/components/Image';

type Props = {
  //
};

const Iterms: React.FC<Props> = () => {

  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.items}`}>
          {
            new Array(20).fill(null).map((item, index) => (
              <div key={index} className={`${styles.item}`}>
                <Image name="/images/player/avatar.png" />
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default memo(Iterms);
