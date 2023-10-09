import React, { memo } from 'react';
import { Helmet } from 'react-helmet';

type Props = {
  //
};

const Head: React.FC<Props> = () => {
  return (
    <>
      <Helmet>
        <title>Game</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Helmet>
    </>
  );
};

export default memo(Head);
