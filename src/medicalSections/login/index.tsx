'use client';
import UserType from '@/components/UserType';
import { Box } from '@mui/material';
import Logo from '@/components/Logo';
import LoginForm from '@/components/LoginForm';
import Container from '@/components/Container';
import { useEffect, useState, useCallback } from 'react';
import { getUsers, getDoctors } from '@/apis/usersApis';
import styles from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
type Props = {
  setIsLogin: (value: boolean) => void;
};
export default function LoginPage({ setIsLogin }: Props) {
  const dispatch = useDispatch();
  const [users, setUsers] = useState();
  const [doctors, setDoctors] = useState();
  const [loginType, setLoginType] = useState('user');
  const loginState = useSelector((state: any) => state?.userReducer.isLogin);
  const getUsersData = async () => {
    const Data = await getUsers();
    setUsers(Data?.users);
  };
  const getDoctorsData = async () => {
    const Data = await getDoctors();
    setDoctors(Data?.doctors);
  };
  const setUserType = useCallback((userType: string) => {
    dispatch({
      type: 'SET_USER_TYPE',
      value: userType,
    });
  }, []);
  const handelUserType = useCallback((value: string) => {
    if (value === 'user') {
      setLoginType('user');
      setUserType('user');
    } else {
      setLoginType('doctor');
      setUserType('doctor');
    }
  }, []);
  useEffect(() => {
    if (loginState) setIsLogin(true);
  }, [loginState]);
  useEffect(() => {
    if (loginType === 'user' && !users) {
      getUsersData();
    }
    if (loginType === 'doctor' && !doctors) {
      getDoctorsData();
    }
  }, [loginType]);

  return (
    <div className={styles.loginRoot}>
      <Container>
        <Box padding="20px">
          <Logo />
        </Box>
        <Box className={styles.FormSections}>
          <Box width="50%">
            {' '}
            <UserType HandelUserType={handelUserType} />
            <LoginForm data={loginType == 'user' ? users : doctors} />
          </Box>
        </Box>
      </Container>
    </div>
  );
}
