import React, { memo } from 'react';
import styles from './styles.module.css'

export const Avatar: React.FC = () => {
  return (
    <>
      <div className={`${styles.avatarWrapper}`}>
        <img className={styles.avatar} src="/images/player/avatar.png" alt="" />
      </div>
    </>
  )
}

type Props = {
  //
};

const Player: React.FC<Props> = () => {
  return (
    <>
      <Avatar />
    </>
  );
};

export default memo(Player);
