import React, { useCallback, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styles from './index.module.scss';
import { Box, Button, InputBase, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
type Props = {
  data: any;
};
const LoginForm = ({ data }: Props) => {
  const dispatch = useDispatch();
  const {
    control: loginControl,
    formState: loginErrors,
    handleSubmit: handleLoginSubmit,
  } = useForm();
  const [errorValue, setErorrValue] = useState('');

  const setProfile = useCallback((value: any) => {
    dispatch({
      type: 'SET_PROFILE_DATA',
      value: value,
    });
  }, []);
  const setIsLogin = useCallback((value: boolean) => {
    dispatch({
      type: 'SET_LOGIN_STATE',
      value: value,
    });
  }, []);
  const handleLogin = (fields: any) => {
    const selectedUser = data?.filter(
      (user: any) => user.email === fields.email
    );
    if (selectedUser[0]?.password === fields.password) {
      setProfile(selectedUser[0]);
      setIsLogin(true);
    } else {
      setErorrValue('Invaled Email Or Password');
    }
  };
  return (
    <div className={styles.loginRoot}>
      <form onSubmit={handleLoginSubmit(handleLogin)}>
        <Box>
          <Controller
            control={loginControl}
            name="email"
            rules={{
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            }}
            render={({ field }) => (
              <InputBase
                placeholder="Enter Email Adress"
                fullWidth
                className={styles.loginInput}
                type="email"
                {...field}
              />
            )}
          />
        </Box>
        <Box>
          <Controller
            control={loginControl}
            name="password"
            rules={{
              minLength: {
                message:
                  'The length of password must be at least 8 characters long',
                value: 8,
              },
            }}
            render={({ field }) => (
              <InputBase
                placeholder="Enter Password"
                fullWidth
                className={styles.loginInput}
                type="password"
                {...field}
              />
            )}
          />
          <Box display="flex" justifyContent="center">
            {errorValue && (
              <p style={{ color: 'red', fontSize: 14 }}>{errorValue}</p>
            )}
          </Box>
        </Box>

        <Box className={styles.signinSection}>
          <Button type="submit" className={styles.signInButton}>
            Sign In
          </Button>
        </Box>
      </form>
    </div>
  );
};
export default LoginForm;
