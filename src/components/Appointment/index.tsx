// @flow
import { Box } from '@mui/material';
import React from 'react';
import styles from './index.module.scss';
import Avatr from '../Avatar';
type Props = {
  appointment: any;
};
const AppointMent = ({ appointment }: Props) => {
  return (
    <div>
      <Box className={styles.appointmentRoot}>
        <Box>
          <span className={styles.appointTitle}>
            {appointment?.appintTitle}
          </span>
          <Box>
            <span className={styles.appointName}>{appointment.drName}</span>
          </Box>
          <Box>
            <span className={styles.appointDate}>
              {appointment.apponintDate}
            </span>
          </Box>
          <Box>
            <span className={styles.appointDate}>
              {appointment.appointmentTime}
            </span>
          </Box>
        </Box>
        <Box className={styles.avatarSection}>
          <Avatr alt="dr-img" src={appointment.avatar}></Avatr>
        </Box>
      </Box>
    </div>
  );
};
export default AppointMent;
