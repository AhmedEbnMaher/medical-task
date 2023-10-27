'use client';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
const AppointTitles = [
  { name: 'teeth cleaning' },
  { name: 'health checkup' },
  { name: 'skin sreaning' },
  { name: 'ayes checkup' },
  { name: 'heart checkup' },
];
export default function TitleFiled() {
  const appointTitle = useSelector(
    (state: any) => state.AppointmentReducer.appointTitle
  );
  const [title, setTitle] = React.useState(appointTitle);
  const dispatch = useDispatch();
  const setAppointmentTitle = React.useCallback((value: any) => {
    dispatch({
      type: 'SET_APPOINT_TITLE',
      value: value,
    });
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setTitle(event.target.value);
    setAppointmentTitle(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120, width: '100%', outline: 'none' }}>
      <InputLabel id="demo-select-small-label">Type</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={title}
        label="Doctors"
        onChange={handleChange}
      >
        {AppointTitles.map((AppointTitle: any) => (
          <MenuItem value={AppointTitle.name} key={AppointTitle.name}>
            {AppointTitle.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
