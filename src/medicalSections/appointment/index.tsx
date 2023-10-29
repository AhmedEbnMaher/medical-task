'use client';
import React, { useEffect, useState } from 'react';
import AppointMent from '@/components/Appointment';
import { Box } from '@mui/material';
import styles from './index.module.scss';
import Container from '@/components/Container';
import Reminders from '@/components/Reminders';
import { useSelector } from 'react-redux';
import { getUsersAppointments } from '@/apis/appointmentApis';
type Props = {};
const Appointments = [
  {
    appintTitle: 'Dentist-Control appointment',
    drName: 'Dr.schubert',
    apponintDate: '30-10-2023',
    appointmentTime: '12 AM',
    avatar: '/doctorsImages/avatar1.jpg',
  },
  {
    appintTitle: 'Dentist-Control appointment',
    drName: 'Dr.schubert',
    apponintDate: '30-10-2023',
    appointmentTime: '12 AM',
    avatar: '/doctorsImages/avatar2.jpg',
  },
  {
    appintTitle: 'Dentist-Control appointment',
    drName: 'Dr.schubert',
    apponintDate: '30-10-2023',
    appointmentTime: '12 AM',
    avatar: '/doctorsImages/avatar3.jpg',
  },
  {
    appintTitle: 'Dentist-Control appointment',
    drName: 'Dr.schubert',
    apponintDate: '30-10-2023',
    appointmentTime: '12 AM',
    avatar: '/doctorsImages/avatar4.jpg',
  },
  {
    appintTitle: 'Dentist-Control appointment',
    drName: 'Dr.schubert',
    apponintDate: '30-10-2023',
    appointmentTime: '12 AM',
    avatar: '/doctorsImages/avatar5.jpg',
  },
  {
    appintTitle: 'Dentist-Control appointment',
    drName: 'Dr.schubert',
    apponintDate: '30-10-2023',
    appointmentTime: '12 AM',
    avatar: '/doctorsImages/avatar6.jpg',
  },
];
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
const AppointPage = (props: Props) => {
  const [usersAppoint, setusersAppoint] = useState([]);
  const userId = useSelector((state: any) => state.userReducer.profile.id);

  const getNewNotification = async () => {
    const Data = await getUsersAppointments(userId);
    if (Data) setusersAppoint(Data);
  };
  useEffect(() => {
    getNewNotification();
  }, [userId]);
  return (
    <div>
      <Container>
        <Box className={styles.appointPageRoot}>
          <Box className={styles.appointSection}>
            <Box paddingBottom={'20px'}>
              <span className={styles.title}>Next Appointments</span>
            </Box>
            {usersAppoint.length !== 0 ? (
              usersAppoint?.map((appointment: any) => (
                <AppointMent appointment={appointment.apointment} />
              ))
            ) : (
              <></>
            )}
          </Box>
          <Box className={styles.reminderSection}>
            <Box paddingBottom={'20px'}>
              <span className={styles.title}>Reminders</span>
            </Box>
            {RemindersData?.map((reminder: any) => (
              <Reminders reminder={reminder} />
            ))}
          </Box>
        </Box>
      </Container>
    </div>
  );
};
export default AppointPage;
