import React from 'react';
import styles from './index.module.scss';
import { BiSolidFile, BiLogIn } from 'react-icons/bi';
import { Box } from '@mui/material';
type Props = {
  record: any;
};
export const Records = ({ record }: Props) => {
  return (
    <div>
      <Box className={styles.medicalRecordRoot}>
        <span>
          <BiSolidFile color="#42CB95" size={15} marginRight={'5px'} />
          {record.name}
        </span>
        <span> {record.period}</span>
        <span>{record.hospitalName}</span>
        <span>{record.lapName}</span>
        <span>{record.drName}</span>
        <span>
          <BiLogIn color="blue" size={20} cursor="pointer" />
        </span>
      </Box>
    </div>
  );
};
