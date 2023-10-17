import React, { memo } from 'react';
import Home from './components/home';

type Props = {
  //
};

const PvPScreen: React.FC<Props> = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default memo(PvPScreen);
