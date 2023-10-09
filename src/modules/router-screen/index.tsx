import { RootState } from '@/store/types';
import { SCREEN_ENUM } from '@/types/enum';
import _ from 'lodash';
import React, { lazy, memo } from 'react';
import { useSelector } from 'react-redux';

const Home = lazy(() => import('@/modules/screen/home'));
const Tutorial = lazy(() => import('@/modules/screen/tutorial'));

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

  return (
    <>
      {
        _.find(screenRoutes, { screen })?.component
      }
    </>
  );
};

export default memo(RouterScreen);
