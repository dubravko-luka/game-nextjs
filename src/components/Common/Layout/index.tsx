import React, { memo } from 'react';
import styles from './styles.module.css'
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';

type Props = {
  children: React.ReactNode
};

const Layout: React.FC<Props> = ({ children }) => {

  const { width, height } = useSelector((state: RootState) => state?.window);

  const handleSizeContainer = () => {
    if (width / 1.777777 < height) {
      return {
        position: 'relative',
        width: width,
        height: width / 1.777777,
        transform: `scale(${(height / width / 1.777777) >= 1
          ? width / 1.777777 / 1080
          : width / 1.777777 / 1080
          })`
      }
    }
    else {
      return {
        position: 'static',
        width: height * 1.777777,
        height: height,
        transform: `scale(${(height / width / 1.777777) >= 1
          ? height / 1080
          : height / 1080
          })`
      }
    }
  }

  return (
    <>
      <div
        className={`${styles.wrapper}`}
        style={{
          '--width': `${width}px`,
          '--height': `${height}px`,
        } as any}
      >
        <div className={`${styles.container}`} style={handleSizeContainer() as any}>
          <div
            className={`${styles.content}`}
            style={{
              '--scale': width / (width / 1.777777) - 0.037
            } as any}
          >
            <div className={`${styles.bodyGame}`}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Layout);
