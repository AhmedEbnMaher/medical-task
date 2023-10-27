'use client';

import React from 'react';
import ImageComponent from '@/components/ImageComponent/Image';
import { useMediaQuery } from '@mui/material';

type Props = {
  height?: number;
};
export default function Logo({ height = 50 }: Props) {
  const isMobile = useMediaQuery('(max-width:768px)');
  const isSmallMobile = useMediaQuery('(max-width:350px)');
  return (
    <div>
      <ImageComponent
        src={
          'https://voithy.com/wp-content/uploads/2022/08/voithy-logo-white.svg'
        }
        height={isSmallMobile ? 25 : isMobile ? 30 : height}
        width={isSmallMobile ? 70 : isMobile ? 100 : 140}
        alt={'Logo'}
      />
    </div>
  );
}
