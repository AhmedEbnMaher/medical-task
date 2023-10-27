'use client';
import React from 'react';
import Calender from './Calender';
import { useDispatch } from 'react-redux';
import moment from 'moment';
type Props = {};
const AppointDate = (props: Props) => {
  const dispatch = useDispatch();
  const setAppointmentDate = React.useCallback((value: any) => {
    dispatch({
      type: 'SET_DATE_VALUE',
      value: value,
    });
  }, []);
  const handelDateSelect = (value: any) => {
    setAppointmentDate(value);
  };

  const date = new Date();
  const newDate = moment(date, 'YYYY-MM-DD').format('YYYY-MM-DD');
  return (
    <div style={{ width: '100%' }}>
      <Calender handelDateSelect={handelDateSelect} dateValue={newDate} />
    </div>
  );
};
export default AppointDate;
