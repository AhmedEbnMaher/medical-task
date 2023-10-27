import React, { useCallback } from 'react';
import DoctorsField from './DoctorFiled';
import { Box, Button } from '@mui/material';
import TitleFiled from './AppointmentTitle';
import AppointDate from './AppointDate';
import styles from './index.module.scss';
import { sendAppointment } from '@/apis/appointmentApis';
import { useSelector } from 'react-redux';
type Props = {
  handleModalClose: () => void;
};
const AppointMentModel = ({ handleModalClose }: Props) => {
  const state = useSelector((state: any) => state.AppointmentReducer);
  const handelSendAppointment = useCallback((appoint: any) => {
    sendAppointment(appoint);
    handleModalClose();
  }, []);
  return (
    <div>
      <Box>
        <AppointDate />
        <DoctorsField />
        <TitleFiled />
        <Box display="flex" justifyContent="center">
          <Button
            className={styles.requestButton}
            onClick={() => handelSendAppointment(state)}
          >
            Send Request
          </Button>
        </Box>
      </Box>
    </div>
  );
};
export default AppointMentModel;
