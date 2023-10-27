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
        <span className={styles.sections}>
          <BiSolidFile color="#42CB95" size={15} />
          {record.name}
        </span>
        <span className={styles.sections}> {record.period}</span>
        <span className={styles.sections}>{record.hospitalName}</span>
        <span className={styles.sections}>{record.lapName}</span>
        <span className={styles.sections}>{record.drName}</span>
        <span className={styles.sections}>
          <BiLogIn color="blue" size={20} cursor="pointer" />
        </span>
      </Box>
    </div>
  );
};
