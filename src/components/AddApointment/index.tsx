import React from 'react';
import styles from './index.module.scss';
import { IoMdAdd } from 'react-icons/io';
import { Box, Typography } from '@mui/material';

type Props = {
  handleOpen: () => void;
};
const AddApointment = ({ handleOpen }: Props) => {
  return (
    <div>
      <Box className={styles.addApointmentRoot} onClick={handleOpen}>
        <Box textAlign="center">
          <IoMdAdd size={40} color="#fff" />
          <Typography>Make New Appointment</Typography>
        </Box>
      </Box>
    </div>
  );
};
export default AddApointment;
