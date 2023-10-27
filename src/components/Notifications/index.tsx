'use client';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BiBell } from 'react-icons/bi';
import { Badge, Box, Button } from '@mui/material';
import {
  getNotifications,
  sendUserAppointment,
  setAsDoctorAppointment,
  deletFromNotifications,
  deleteUserNotifications,
  sendUserNotification,
} from '@/apis/notificationsApis';
import styles from './index.module.scss';
import { useSelector } from 'react-redux';

const ITEM_HEIGHT = 68;

export default function Notifications() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [notification, setNotifications] = React.useState();
  const userId = useSelector((state: any) => state.userReducer.profile.id);
  const userType = useSelector((state: any) => state.userReducer.userType);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    getNewNotification();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const getNewNotification = async () => {
    const Data = await getNotifications(userId);
    if (Data) setNotifications(Data);
  };
  React.useEffect(() => {
    getNewNotification();
  }, [userId]);
  const HandelAccept = (appoint: any, id: any) => {
    sendUserAppointment(appoint);
    setAsDoctorAppointment(appoint);
    sendUserNotification(appoint);
    deletFromNotifications(appoint, id);
    handleClose();
  };
  const HandelAsRed = (appoint: any, id: any) => {
    deleteUserNotifications(appoint, id);
    handleClose();
  };
  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Badge
          color="warning"
          badgeContent={notification ? notification?.length : 0}
        >
          <BiBell />
        </Badge>
      </IconButton>
      <Menu
        id="long-menu"
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        anchorEl={anchorEl}
        open={open}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '25ch',
            padding: '10px',
            borderRadius: '15px',
          },
        }}
      >
        <Box>
          <span className={styles.notificationTitle}>Notifications</span>
        </Box>
        {notification ? (
          notification?.map((option: any) => (
            <MenuItem
              key={option?.id}
              selected={option === 'Pyxis'}
              style={{ whiteSpace: 'normal' }}
            >
              {userType === 'user' ? (
                <Box className={styles.itemsSection}>
                  hello {option.apointment.drName} acceptd your appointment at{' '}
                  {option.apointment.apponintDate} to do{' '}
                  {option.apointment.appintTitle}
                  <Box>
                    <Button
                      onClick={() => HandelAsRed(option.apointment, option.id)}
                      className={styles.cancelButton}
                    >
                      Mark as red
                    </Button>
                  </Box>
                </Box>
              ) : (
                <Box className={styles.itemsSection}>
                  hello {option.apointment.drName} new pationt want new
                  apointment at {option.apointment.apponintDate} to do{' '}
                  {option.apointment.appintTitle}
                  <Box>
                    <Button
                      onClick={() => HandelAccept(option.apointment, option.id)}
                      className={styles.acceptButton}
                    >
                      Accept
                    </Button>
                    <Button className={styles.cancelButton}>Cancel</Button>
                  </Box>
                </Box>
              )}
            </MenuItem>
          ))
        ) : (
          <>
            <span>no Notifications</span>
          </>
        )}
      </Menu>
    </div>
  );
}
