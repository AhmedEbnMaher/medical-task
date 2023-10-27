'use client';
import {
  Backdrop,
  Box,
  Button,
  Fade,
  Grid,
  Modal,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import Cards from '../Cards';
import AddApointment from '../AddApointment';
import styles from './index.module.scss';
import Reminders from '../Reminders';
import AppointMentModel from '../NewAppointModel';
import { BiX } from 'react-icons/bi';
type Props = {
  doctorsData: any;
};
const RemindersData = [
  {
    remTitle: 'Teeth cleaning',
    shouldDo: 'one year',
    realTime: '10-8-2023',
    nextTime: '10-8-2024',
  },
  {
    remTitle: 'Health checkup',
    shouldDo: 'every four years',
    realTime: '10-8-2021',
    nextTime: '10-8-2025',
  },
  {
    remTitle: 'Skin screaning',
    shouldDo: 'every three years',
    realTime: '7-11-2020',
    nextTime: '7-11-2023',
  },
  {
    remTitle: 'Teeth cleaning',
    shouldDo: 'one year',
    realTime: '8-9-2021',
    nextTime: '8-9-2023',
  },
  ,
  {
    remTitle: 'Health checkup',
    shouldDo: 'every three years',
    realTime: '10-8-2024',
    nextTime: '10-8-2027',
  },
];
const UserDashboard = ({ doctorsData }: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);
  const handelClick = (data: any) => {
    handleOpen();
  };
  return (
    <div>
      <Box className={styles.topSection}>
        <AddApointment handleOpen={handleOpen} />
        <Box className={styles.reminderSection}>
          <Box paddingBottom={'20px'}>
            <span className={styles.title}>Reminders</span>
          </Box>
          {RemindersData.map((reminder: any, index: any) => (
            <Box key={index}>
              <Reminders reminder={reminder} />
            </Box>
          ))}
        </Box>
      </Box>
      <Box>
        <Typography
          variant="h6"
          sx={{ marginTop: '30px', marginBottom: '20px' }}
        >
          Doctors you can request appointment with them
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
          className={styles.doctorsCards}
        >
          {doctorsData.map((doctor: any, index: number) => (
            <Grid
              item
              xs={1}
              sm={4}
              md={4}
              key={index}
              style={{ textAlign: 'center' }}
            >
              <Cards
                bottomSectionbackground="#fff"
                bottomSectionColor="red"
                bottomSectionHeight={107}
                maxWidth={'100%'}
                cardHeight={314}
                cardImgHeight={207}
                cardTitle={doctor.name}
                cardSubTitle={
                  'We can help You any time  you can request appointment now'
                }
                cardImgUrl={doctor.profileUrl}
                cardTitleColor={'#42CB95'}
                cardSubTitleColor={'#616161'}
                data={doctorsData}
                handelClick={handelClick}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Modal
        className={styles.appontmentModal}
        open={open}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={styles.ModelContainer}>
            <Box className={styles.innerContent}>
              <Box
                display="flex"
                justifyContent="space-between"
                paddingBottom="20px"
              >
                <Typography>Fill Your New Appointment Data</Typography>
                <Button
                  className={styles.modelCloseIcon}
                  onClick={handleModalClose}
                >
                  <BiX size={40} color="#26C485" />
                </Button>
              </Box>
              <Box>
                <AppointMentModel handleModalClose={handleModalClose} />
              </Box>
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default UserDashboard;
