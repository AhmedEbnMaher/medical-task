'use client';
import { Box, Typography } from '@mui/material';
import React from 'react';
import styles from './index.module.scss';
import moment from 'moment';
type Props = {
  reminder: any;
};

const Reminders = ({ reminder }: Props) => {
  const lastTreatment = moment(reminder.realTime).fromNow();
  const nowDay = new Date();
  const warning = moment(nowDay) > moment(reminder.nextTime);

  return (
    <div>
      <Box className={styles.reminderRoot}>
        <Box>
          <Typography
            variant="h6"
            color={warning ? '#ED1C24' : '#42CB95'}
            className={styles.reminderTitle}
          >
            {reminder.remTitle}
          </Typography>
          <Typography className={styles.reminderText}>
            {reminder.shouldDo},{lastTreatment}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};
export default Reminders;
