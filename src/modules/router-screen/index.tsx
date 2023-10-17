import { RootState } from '@/store/types';
import { SCREEN_ENUM } from '@/types/enum';
import _ from 'lodash';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import Tutorial from '@/modules/screen/tutorial'
import Home from '@/modules/screen/home'
import Knapsack from '@/modules/screen/knapsack'
import Activity from '@/modules/screen/activity'
import styles from './styles.module.css'
import Card from '../screen/card';
import Shop from '../screen/shop';
import DailyTask from '../screen/daily-task';
import Ranked from '../screen/ranked';
import Pvp from '../screen/pvp';

type Props = {
  //
};

const screenRoutes = [
  {
    screen: SCREEN_ENUM.HOME,
    component: <Home />
  },
  {
    screen: SCREEN_ENUM.RANKED,
    component: <Ranked />
  },
  {
    screen: SCREEN_ENUM.PVP,
    component: <Pvp />
  },
  {
    screen: SCREEN_ENUM.ACTIVITY,
    component: <Activity />
  },
  {
    screen: SCREEN_ENUM.TUTORIAL,
    component: <Tutorial />
  },
  {
    screen: SCREEN_ENUM.DAILY_TASK,
    component: <DailyTask />
  },
  {
    screen: SCREEN_ENUM.SHOP,
    component: <Shop />
  },
  {
    screen: SCREEN_ENUM.KNAPSACK,
    component: <Knapsack />
  },
  {
    screen: SCREEN_ENUM.CARD,
    component: <Card />
  }
]

const RouterScreen: React.FC<Props> = () => {

  const { screen } = useSelector((state: RootState) => state?.screen);

  return (
    <>
      {
        screenRoutes?.map((item, index) => {
          if (item?.screen === screen) {
            return (
              <div key={index} className={styles.wrapper}>
                {item?.component}
              </div>
            )
          }
        })
      }
    </>
  );
};

export default memo(RouterScreen);
