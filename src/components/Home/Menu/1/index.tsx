import React, { memo } from 'react';
import styles from './styles.module.css'
import Icon from '@/components/Icons/1'
import { ICON_1_ENUM } from '@/types/enum';

type Props = {
  //
};

const menuSetting = [
  {
    name: 'Shop',
    icon: ICON_1_ENUM.SHOP,
  },
  {
    name: 'Activity',
    icon: ICON_1_ENUM.ACTIVITY,
  },
  {
    name: 'Daily task',
    icon: ICON_1_ENUM.DAILY_TASK,
  },
  {
    name: 'Card',
    icon: ICON_1_ENUM.CARD,
  },
  {
    name: 'Achievement',
    icon: ICON_1_ENUM.ACHIEVEMENT,
  },
  {
    name: 'Knapsack',
    icon: ICON_1_ENUM.KNAPSACK,
  }
]

const MenuHome: React.FC<Props> = () => {
  return (
    <>
      <div className={`${styles.wrapper}`}>
        {
          menuSetting.map((item, index) => (
            <div className={`${styles.item}`} key={index} style={{ '--item': menuSetting.length } as any}>
              {
                index % 2 !== 0 && item.name
              }
              <div className={`${styles.icon}`}>
                <Icon icon={item?.icon} />
              </div>
              {
                index % 2 === 0 && item.name
              }
            </div>
          ))
        }
      </div>
    </>
  );
};

export default memo(MenuHome);
