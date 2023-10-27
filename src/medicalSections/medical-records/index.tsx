'use client';
import React, { useEffect } from 'react';
import { Records } from '@/components/Records';
import { Box } from '@mui/material';
import styles from './index.module.scss';
import Container from '@/components/Container';
import axios from 'axios';
type Props = {};
const patientRecods = [
  {
    name: 'Lap Report',
    drName: 'Dr.schubert',
    period: '30-10-2023',
    hospitalName: 'hospital collen',
    lapName: 'Elporge Lap',
  },
  {
    name: 'Lap Report',
    drName: 'Dr.schubert',
    period: '30-10-2023',
    hospitalName: 'hospital collen',
    lapName: 'Elporge Lap',
  },
  {
    name: 'Lap Report',
    drName: 'Dr.schubert',
    period: '30-10-2023',
    hospitalName: 'hospital collen',
    lapName: 'Elporge Lap',
  },
  {
    name: 'Lap Report',
    drName: 'Dr.schubert',
    period: '30-10-2023',
    hospitalName: 'hospital collen',
    lapName: 'Elporge Lap',
  },
  {
    name: 'Lap Report',
    drName: 'Dr.schubert',
    period: '30-10-2023',
    hospitalName: 'hospital collen',
    lapName: 'Elporge Lap',
  },
  {
    name: 'Lap Report',
    drName: 'Dr.schubert',
    period: '30-10-2023',
    hospitalName: 'hospital collen',
    lapName: 'Elporge Lap',
  },
];

const MedicalRecordsPage = (props: Props) => {
  useEffect(() => {
    axios
      .get('http://demo3956756.mockable.io/123445/records')
      .then((respons: any) => {
        const data = respons.data;
        const payload = data;
      });
  }, []);
  return (
    <div>
      <Container>
        <Box className={styles.recodsPageRoot}>
          <Box className={styles.recordstSection}>
            <Box paddingBottom={'20px'}>
              <span className={styles.title}>Medical Records</span>
            </Box>
            <Box className={styles.recordTitles}>
              <span className={styles.sections}>Name</span>
              <span className={styles.sections}>Period</span>
              <span className={styles.sections}>Hospital Name</span>
              <span className={styles.sections}>Lab Name</span>
              <span className={styles.sections}>DR Name</span>
              <span className={styles.sections}>Open Record</span>
            </Box>
            {patientRecods?.map((record: any) => (
              <Records record={record} />
            ))}
          </Box>
        </Box>
      </Container>
    </div>
  );
};
export default MedicalRecordsPage;
