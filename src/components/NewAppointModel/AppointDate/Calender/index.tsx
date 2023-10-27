/* eslint-disable react/display-name */

'use client';
import React, { useCallback, useEffect, useState } from 'react';
import Datepicker from 'react-datepicker';
import { Box, InputBase } from '@mui/material';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { useMediaQuery } from '@mui/material';
import styles from './index.module.scss';
import moment from 'moment';

type Props = {
  handelDateSelect: (date: string) => void;
  dateValue: any;
};
const Calender = ({ handelDateSelect, dateValue }: Props) => {
  const [startDateOpen, setStartDateOpen] = useState(false);
  const [startDate, setStartDate] = useState(dateValue);
  const ExampleCustomInput = React.forwardRef(({}, ref) => {
    const departDate = moment(startDate).toDate();
    const isSmallMobie = useMediaQuery('(max-width:450px)');

    return (
      <Box ref={ref}>
        <Box className={styles.dateInputBaseRoot}>
          <Box className={styles.dateIcon}>
            <FaCalendarAlt
              size={isSmallMobie ? 22 : 32}
              color="#0a425c"
              className={styles.calenderIcon}
            />
          </Box>

          <InputBase
            fullWidth={true}
            className={styles.dateInputBase}
            onClick={() => {
              setStartDateOpen(true);
            }}
            value={moment(departDate, 'MM/D/YY').format('DD/MM/YY')}
          />
        </Box>
      </Box>
    );
  });
  const HandelDateChanges = (date: Date) => {
    handelDateSelect(moment(date, 'YYYY-MM-DD').format('YYYY-MM-DD'));
    setStartDate(moment(date, 'YYYY-MM-DD').format('YYYY-MM-DD'));
    setStartDateOpen(false);
  };
  return (
    <div style={{ width: '100%' }}>
      <Datepicker
        popperPlacement="bottom"
        className={styles.datepickerStyle}
        selected={moment(dateValue).toDate()}
        onChange={(date: Date) => HandelDateChanges(date)}
        showMonthDropdown
        dateFormat="MM/dd"
        open={startDateOpen}
        useShortMonthInDropdown
        customInput={<ExampleCustomInput />}
        popperClassName={styles.positionCalender}
        onClickOutside={() => setStartDateOpen(false)}
        minDate={moment().toDate()}
        popperModifiers={[
          {
            name: 'flip',
            enabled: false,
          },
        ]}
      />
    </div>
  );
};
export default Calender;
