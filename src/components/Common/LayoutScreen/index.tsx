import React, { memo } from 'react';
import styles from './styles.module.css'

type Props = {
  children: React.ReactNode
};

const LayoutScreen: React.FC<Props> = ({ children }) => {
  return (
    <>

      <div className={`${styles.wrapper}`}>
        <div className={`${styles.content}`}>
          {children}
        </div>
      </div>
    </>
  );
};

export default memo(LayoutScreen);
