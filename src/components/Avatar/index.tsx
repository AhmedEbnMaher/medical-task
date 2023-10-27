import React from 'react';
import { Avatar } from '@mui/material';
type Props = {
  src: any;
  alt: string;
};
const Avatr = ({ src, alt }: Props) => {
  return (
    <div>
      <Avatar alt={alt} src={src} />
    </div>
  );
};
export default Avatr;
