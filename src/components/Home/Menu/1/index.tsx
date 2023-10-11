import React, { memo } from 'react';
import styles from './styles.module.css'

type Props = {
  //
};

const menuSetting = [
  {
    name: 'Shop'
  },
  {
    name: 'Activity'
  },
  {
    name: 'Daily task'
  },
  {
    name: 'Card'
  },
  {
    name: 'Achievement'
  },
  {
    name: 'Knapsack'
  }
]

const MenuHome: React.FC<Props> = () => {
  return (
    <>
      <div className={`${styles.wrapper}`}>
        {
          menuSetting.map((item, index) => (
            <div className={`${styles.item}`} key={index} style={{ '--item': menuSetting.length } as any}>
              {item.name}
            </div>
          ))
        }
      </div>
    </>
  );
};

export default memo(MenuHome);
