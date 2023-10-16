import React, { memo } from 'react';
import styles from './styles.module.css'
import Image from '@/components/Image';

type Props = {
  //
};

const CollectSupperRareCards: React.FC<Props> = () => {
  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.content}`}>
          <div className={`${styles.items}`}>
            {
              ["blessing", 'hel', 'mage', 'surtur', 'takeit'].map((item, index) => (
                <div className={`${styles.item}`} key={index}>
                  <div className={`${styles.wrapImage}`}>
                    <Image name={`/images/cards/${item}.png`} option={{ className: styles.image }} />
                  </div>
                  <button className={`${styles.buttonOwned} ${index % 2 === 0 ? styles.notOwnedYet : styles.haveOwned}`}>
                    {
                      index % 2 === 0
                        ? "Not owned yet"
                        : "Have owned"
                    }
                  </button>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(CollectSupperRareCards);
