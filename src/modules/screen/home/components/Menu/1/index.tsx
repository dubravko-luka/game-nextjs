import React, { memo } from 'react';
import styles from './styles.module.css'
import Icon from '@/components/Icons/1'
import { ICON_1_ENUM, SCREEN_ENUM } from '@/types/enum';
import { useDispatch } from 'react-redux';
import { setScreen } from '@/store/actions/screenAction';

type Props = {
  //
};

type MENU_SETTING = {
  name: string,
  icon: ICON_1_ENUM,
  screen?: SCREEN_ENUM
}

const menuSetting: MENU_SETTING[] = [
  {
    name: 'Shop',
    icon: ICON_1_ENUM.SHOP,
    screen: SCREEN_ENUM.SHOP
  },
  {
    name: 'Activity',
    icon: ICON_1_ENUM.ACTIVITY,
    screen: SCREEN_ENUM.ACTIVITY
  },
  {
    name: 'Daily task',
    icon: ICON_1_ENUM.DAILY_TASK,
    screen: SCREEN_ENUM.DAILY_TASK
  },
  {
    name: 'Card',
    icon: ICON_1_ENUM.CARD,
    screen: SCREEN_ENUM.CARD
  },
  {
    name: 'Knapsack',
    icon: ICON_1_ENUM.KNAPSACK,
    screen: SCREEN_ENUM.KNAPSACK
  }
]

const MenuHome: React.FC<Props> = () => {

  const dispath = useDispatch()

  const handleSelectScreen = (item: MENU_SETTING) => {
    if (item?.screen) {
      dispath(setScreen(item?.screen))
    }
  }

  return (
    <>
      <div className={`${styles.wrapper}`}>
        {
          menuSetting.map((item, index) => (
            <div onClick={() => handleSelectScreen(item)} className={`${styles.item}`} key={index} style={{ '--item': menuSetting.length } as any}>
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
