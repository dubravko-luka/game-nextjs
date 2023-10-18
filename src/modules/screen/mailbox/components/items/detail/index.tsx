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
          <p className={`${styles.sender}`}>
            SYSTEM
          </p>
        </div>
        <div className={`${styles.content}`}>
          <div className={`${styles.title}`}>
            <p className={`${styles.textTitle}`}>Title</p>
            <p className={`${styles.textContent}`}>{item.name}</p>
          </div>
          <div className={`${styles.detail}`}>
            <p className={`${styles.textTitle}`}>Content</p>
            <p className={`${styles.textContent}`} dangerouslySetInnerHTML={{ __html: item.content }}></p>
          </div>
        </div>
        <div className={`${styles.wrapReward} no-sb`}>
          <div className={`${styles.rewards}`}>
            {
              new Array(3).fill(null).map((_, index) => (
                <div className={`${styles._rewards}`} key={index}>
                  <div className={`${styles.reward}`}>
                    <Image name='/images/items/gemstone.png' option={{ className: styles.imageIcon }} />
                  </div>
                  <p className={`${styles.nameItem}`}>Mission point package (season 9)</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ItemDetail);
