'use client';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
export default function DoctorsField() {
  const Doctors = useSelector(
    (state: any) => state.allDoctorsReducer.allDoctors
  );
  const userId = useSelector((state: any) => state.userReducer.profile.id);
  const drName = useSelector((state: any) => state.AppointmentReducer.drName);
  const [doctor, setDoctor] = React.useState(drName);
  const dispatch = useDispatch();
  const setDoctorName = React.useCallback((value: any) => {
    dispatch({
      type: 'SET_DR_NAME',
      value: value,
    });
  }, []);
  const setDoctorId = React.useCallback((value: any) => {
    dispatch({
      type: 'SET_ID_VALUE',
      value: value,
    });
  }, []);
  const setDoctorAvatar = React.useCallback((value: any) => {
    dispatch({
      type: 'SET_AVATAR_VALUE',
      value: value,
    });
  }, []);
  const setUserId = React.useCallback((value: any) => {
    dispatch({
      type: 'SET_USERID_VALUE',
      value: value,
    });
  }, []);
  const handleChange = (event: SelectChangeEvent) => {
    setUserId(userId);
    const choosedValue = Doctors.filter(
      (doctor: any) => doctor.name === event.target.value
    );
    setDoctor(event.target.value);
    setDoctorName(event.target.value);
    if (choosedValue) {
      setDoctorId(choosedValue[0]?.id);
      setDoctorAvatar(choosedValue[0]?.profileUrl);
    }
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120, width: '100%', outline: 'none' }}>
      <InputLabel id="demo-select-small-label">Doctors</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={doctor}
        label="Doctors"
        onChange={handleChange}
      >
        {Doctors.map((doctor: any) => (
          <MenuItem value={doctor.name} key={doctor.id}>
            {doctor.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
