import { RootState } from '@/store/types';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';

type Props = {
  name: string,
  option: any
};

const Image: React.FC<Props> = ({ name, option }) => {

  const images = useSelector((state: RootState) => state?.image.images)

  return (
    <>
      <img src={images.find((image) => image.key === name)?.base64Image} alt="" {...option} />
    </>
  );
};

export default memo(Image);
