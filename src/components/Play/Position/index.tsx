import React, { memo } from 'react';
import styles from './styles.module.css'
import Image from '@/components/Image';
import { ICardMainPlaying, ICardPlaying } from '@/types/interfaces';

type Props = {
  isMain?: boolean,
  card?: ICardPlaying | ICardMainPlaying,
  action?: boolean,
  top?: string | number,
  left?: string | number,
  selected?: boolean,
  option?: any;
  scale?: string | number
};

const Position: React.FC<Props> = ({ isMain = false, card, action, top = 0, selected, option, left = 0, scale = 0 }) => {

  return (
    <>
      <div className={`${styles.card} ${selected ? styles.selected : ''} ${isMain ? styles.wrapper_main : styles.wrapper}`} {...option}>
        <div
          className={`${styles.cardContent} ${card?.src ? styles.shadow : ''} ${action ? styles.action : ''}`}
          style={{
            "--top": `${top}px`,
            '--left': `${left}%`,
            '--scale': `${scale}`
          } as any}
        >
          <Image option={{ className: styles.image }} name={card?.src ?? ''} />
        </div>
      </div>
    </>
  );
};

export default memo(Position);
