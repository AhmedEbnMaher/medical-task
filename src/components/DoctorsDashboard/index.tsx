'use client';
import { getDoctorsAppointments } from '@/apis/appointmentApis';
import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { useSelector } from 'react-redux';
import AppointMent from '../Appointment';
import Cards from '../Cards';
import { useRouter } from 'next/navigation';

type Props = {
  userData: any;
};
const DcotorDashboard = ({ userData }: Props) => {
  const router = useRouter();
  const [dcotorAppoint, setDoctorAppoint] = useState('');
  const userId = useSelector((state: any) => state.userReducer.profile.id);
  const handelClick = (data: any) => {
    router.push('/medical-records');
  };
  const getNewNotification = async () => {
    const Data = await getDoctorsAppointments(userId);
    if (Data) setDoctorAppoint(Data);
  };
  useEffect(() => {
    getNewNotification();
  }, [userId]);
  return (
    <div>
      <Box className={styles.appointSection}>
        <Box paddingBottom={'20px'}>
          <span className={styles.title}>
            Hello Dr your Next Appointments Here
          </span>
        </Box>
        {dcotorAppoint !== '' ? (
          dcotorAppoint?.map((appointment: any) => (
            <AppointMent appointment={appointment.apointment} />
          ))
        ) : (
          <></>
        )}
      </Box>
      <Box>
        <Typography
          variant="h6"
          sx={{ marginTop: '30px', marginBottom: '20px' }}
        >
          Hello Dr Here a List With Your Patient You Can See Thier Medical
          Records
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
          className={styles.doctorsCards}
        >
          {userData.map((user: any, index: number) => (
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
                cardTitle={user.name}
                cardSubTitle={
                  'We can help You any time  you can request appointment now'
                }
                cardImgUrl={user.profileUrl}
                cardTitleColor={'#42CB95'}
                cardSubTitleColor={'#616161'}
                data={userData}
                handelClick={handelClick}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};
export default DcotorDashboard;
