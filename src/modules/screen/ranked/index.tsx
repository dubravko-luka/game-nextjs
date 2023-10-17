import React, { memo } from 'react';
import Home from './components/home';

type Props = {
  //
};

const TutorialScreen: React.FC<Props> = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default memo(TutorialScreen);
