import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import {
  BiGridAlt,
  BiCalendar,
  BiFile,
  BiSolidArrowFromRight,
} from 'react-icons/bi';
import styles from './index.module.scss';
import NavBar from '../NavBar';
import Logo from '../Logo';
import MenuItems from './SideMenuItems';
import { Button, useMediaQuery } from '@mui/material';
const drawerWidth = 240;

interface Props {
  window?: () => Window;
  children: React.ReactNode;
}

export default function SideMenu(props: Props) {
  const { window, children } = props;
  const [openSideMenu, setSideMenuOpen] = useState(false);
  const handelSideMenuOpen = () => setSideMenuOpen(!openSideMenu);
  const Mobile = useMediaQuery('(max-width:600px)');
  const drawer = (
    <div>
      <Box className={styles.logoSection}>
        <Logo />
      </Box>

      <Divider />
      <MenuItems text="dashboard">
        <BiGridAlt size={25} />
      </MenuItems>

      <MenuItems text="appointments">
        <BiCalendar size={25} />
      </MenuItems>

      <MenuItems text="medical-records">
        <BiFile size={25} />
      </MenuItems>
      <Divider />
      {Mobile ? (
        <Button onClick={handelSideMenuOpen}>
          <BiSolidArrowFromRight size={25} />
          Close
        </Button>
      ) : (
        <></>
      )}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <NavBar handelSideMenuOpen={handelSideMenuOpen} />
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={openSideMenu}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          marginTop: '100px',
          backgroundColor: '#F3F7F4',
          minHeight: '100vh',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
