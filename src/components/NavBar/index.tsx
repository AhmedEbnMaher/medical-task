'use client';
import React from 'react';
import { Box, IconButton } from '@mui/material';
import Container from '../Container';
import styles from './index.module.scss';
import { BiMenu } from 'react-icons/bi';
import Avatr from '../Avatar';
import Notifications from '../Notifications';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

type Props = {
  handelSideMenuOpen: () => void;
};
const NavBar = ({ handelSideMenuOpen }: Props) => {
  const pathName = usePathname();
  const userData = useSelector((state: any) => state.userReducer.profile);
  return (
    <>
      <Box className={styles.navBarRoot}>
        <Container>
          <nav className={styles.nav}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: 'none' } }}
              onClick={handelSideMenuOpen}
            >
              <BiMenu />
            </IconButton>

            <Box>
              <h1 className={styles.pageTitle}>
                {pathName == '/' ? 'Dashboard' : pathName.substring(1)}
              </h1>
            </Box>
            <Box className={styles.navSideSection}>
              <Notifications />
              <span className={styles.userName}>{userData.name}</span>
              <Avatr alt="profile" src={userData.profileUrl} />
            </Box>
          </nav>
        </Container>
      </Box>
    </>
  );
};
export default NavBar;
