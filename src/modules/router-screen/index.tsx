import { RootState } from '@/store/types';
import { SCREEN_ENUM } from '@/types/enum';
import _ from 'lodash';
import React, { lazy, memo } from 'react';
import { useSelector } from 'react-redux';
import Tutorial from '@/modules/screen/tutorial'
import Home from '@/modules/screen/home'

type Props = {
  //
};

const screenRoutes = [
  {
    screen: SCREEN_ENUM.HOME,
    component: <Home />
  },
  {
    screen: SCREEN_ENUM.TUTORIAL,
    component: <Tutorial />
  }
]

const RouterScreen: React.FC<Props> = () => {

  const { screen } = useSelector((state: RootState) => state?.screen);
  console.log('---------->', screen);

  return (
    <>
      {
        screenRoutes?.map((item, index) => {
          if (item?.screen === screen) {
            return (
              <div key={index} style={{ width: '100%', height: '100%' }}>
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
