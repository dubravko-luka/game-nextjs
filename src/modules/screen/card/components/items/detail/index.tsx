import React, { memo } from 'react';
import styles from './styles.module.css'
import Image from '@/components/Image';

type Props = {
  item: any
};

const ItemDetail: React.FC<Props> = ({ item }) => {
  return (
    <>
      <div className={`${styles.wrapDetail}`}>
        <div className={`${styles.wrapItem}`}>
          <div className={`${styles.detail}`}>
            <div className={`${styles.item}`}>
              <Image name={item.src} option={{ className: styles.imgDetail }} />
            </div>
            <p className={`${styles.itemName}`}>{item.name}</p>
            <p className={`${styles.itemQuntity}`}>Already have <span className={styles.numberQuantity}>1</span></p>
          </div>
        </div>
        <div className={`${styles.detailDescription}`}>
          <p>MAX champion pieces can be used to exchange MAX champions when there are 250 pieces.</p>
        </div>
      </div>
    </>
  );
};

export default memo(ItemDetail);
