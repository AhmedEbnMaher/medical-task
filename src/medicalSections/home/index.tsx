'use client';
import React, { useCallback, useEffect, useState } from 'react';
import UserDashboard from '@/components/UserDashboard';
import DcotorDashboard from '@/components/DoctorsDashboard';
import Container from '@/components/Container';
import { getDoctors, getUsers } from '@/apis/usersApis';
import { useDispatch, useSelector } from 'react-redux';
type Props = {};
const HomePage = (props: Props) => {
  const userType = useSelector((state: any) => state.userReducer.userType);
  const doctorsData = useSelector(
    (state: any) => state.allDoctorsReducer.allDoctors
  );
  const userData = useSelector((state: any) => state.allUserReducer.allUsers);

  const dispatch = useDispatch();
  const setAllUsers = useCallback((value: any) => {
    dispatch({
      type: 'SET_ALL_USERS',
      value: value,
    });
  }, []);
  const setAllDoctors = useCallback((value: any) => {
    dispatch({
      type: 'SET_ALL_DOCTORS',
      value: value,
    });
  }, []);
  const getUsersData = async () => {
    const Data = await getUsers();
    setAllUsers(Data?.users);
  };
  const getDoctorsData = async () => {
    const Data = await getDoctors();
    setAllDoctors(Data?.doctors);
  };
  useEffect(() => {
    getUsersData();
    getDoctorsData();
  }, []);

  return (
    <div>
      <Container>
        {userType === 'user' ? (
          <UserDashboard doctorsData={doctorsData} />
        ) : (
          <DcotorDashboard userData={userData} />
        )}
      </Container>
    </div>
  );
};
export default HomePage;
