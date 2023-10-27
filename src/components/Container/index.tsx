'use client';
import React from 'react';
import { Container } from '@mui/material';
import { useMediaQuery } from '@mui/material';
export default function FixedContainer({
  children,
  width = 1476,
}: {
  children: JSX.Element | JSX.Element[];
  width?: number;
}) {
  const isMobile = useMediaQuery('(max-width:768px)');
  const isSmallMobile = useMediaQuery('(max-width:450px)');
  return (
    <Container
      style={{
        maxWidth: width,
        paddingLeft: isSmallMobile ? '15px' : isMobile ? '20px' : '40px',
        paddingRight: isSmallMobile ? '15px' : isMobile ? '20px' : '40px',
      }}
    >
      {children}
    </Container>
  );
}
