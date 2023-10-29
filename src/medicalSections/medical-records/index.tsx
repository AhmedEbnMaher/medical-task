'use client';
import React, { useEffect, useState } from 'react';
import { Records } from '@/components/Records';
import { Backdrop, Box, Button, Fade, Modal, Typography } from '@mui/material';
import styles from './index.module.scss';
import Container from '@/components/Container';
import {
  getAllRecords,
  getUserRecords,
  setUserRecord,
} from '@/apis/medicalRecordsApis';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'next/navigation';
import { BiPlusMedical, BiX } from 'react-icons/bi';
import NewRecordInput from './NewRecoedInputs';
import moment from 'moment';
type Props = {};

const MedicalRecordsPage = (props: Props) => {
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId');
  const [allRecords, setAllRecords] = useState([]);
  const [userRecords, setUserRecords] = useState([]);
  const [open, setOpen] = useState(false);
  const [hospital, setHospital] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [labName, setLabName] = useState('');
  const [recordType, setRcordType] = useState('');
  const [error, setErorr] = useState('');
  const isDataCompleted =
    hospital !== '' && doctorName !== '' && labName !== '' && recordType !== '';
  const handleOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);
  const userData = useSelector((state: any) => state.userReducer);
  const getAllMedicalRecords = async () => {
    const Data = await getAllRecords();
    setAllRecords(Data);
  };
  const getUsrMedicalRecords = async () => {
    const Data = await getUserRecords(userId ? userId : userData?.profile.id);
    setUserRecords(Data);
  };
  useEffect(() => {
    getAllMedicalRecords();
    getUsrMedicalRecords();
  }, []);
  const date = new Date();
  const newDate = moment(date, 'YYYY-MM-DD').format('YYYY-MM-DD');
  const recordData = {
    name: recordType,
    drName: doctorName,
    period: newDate,
    hospitalName: hospital,
    lapName: labName,
    patientName: userData?.profile.name,
  };
  const addNewRecord = () => {
    if (isDataCompleted) {
      setUserRecord(userData?.profile.id, recordData);

      handleModalClose();
    } else {
      setErorr('please complete  your fileds');
    }
  };
  return (
    <div>
      <Container>
        <Box className={styles.recodsPageRoot}>
          {userData?.userType === 'user' ? (
            <Box display="flex" justifyContent="space-between" width="100%">
              <h4>Add New Record:</h4>{' '}
              <Button className={styles.addNewRecord} onClick={handleOpen}>
                <BiPlusMedical color="#fff" /> Add New One
              </Button>
            </Box>
          ) : (
            <></>
          )}

          <Box className={styles.recordstSection}>
            <Box paddingBottom={'20px'}>
              <span className={styles.title}>Medical Records</span>
            </Box>
            <Box className={styles.recordTitles}>
              <span>Name</span>
              <span>Period</span>
              <span>Hospital Name</span>
              <span>Lab Name</span>
              <span>DR Name</span>
              <span>Open Record</span>
            </Box>

            {userData?.userType === 'doctor' && userId === null ? (
              <Box>
                {allRecords ? (
                  <Box>
                    {allRecords?.map((data: any, index) =>
                      data.records.map((record: any, idex: any) => (
                        <Box key={record.data.drName + idex}>
                          {idex === 0 ? (
                            <Box className={styles.patientName}>
                              <span>
                                Patient Name: {record.data.patientName}{' '}
                              </span>
                            </Box>
                          ) : (
                            <></>
                          )}

                          <Records record={record.data} />
                        </Box>
                      ))
                    )}
                  </Box>
                ) : (
                  <></>
                )}
              </Box>
            ) : (
              <Box>
                {userRecords ? (
                  <Box>
                    {userRecords?.map((record: any, idex: number) => (
                      <Box key={record.drName + idex}>
                        {idex === 0 ? (
                          <Box className={styles.patientName}>
                            <span>
                              Patient Name: {record.data.patientName}{' '}
                            </span>
                          </Box>
                        ) : (
                          <></>
                        )}

                        <Records record={record.data} />
                      </Box>
                    ))}
                  </Box>
                ) : (
                  <></>
                )}
              </Box>
            )}
          </Box>
        </Box>
        <Modal
          className={styles.recordModal}
          open={open}
          onClose={handleModalClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={styles.ModelContainer}>
              <Box className={styles.innerContent}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  paddingBottom="20px"
                >
                  <Typography>Fill Your New Record Data</Typography>
                  <Button
                    className={styles.modelCloseIcon}
                    onClick={handleModalClose}
                  >
                    <BiX size={40} color="#26C485" />
                  </Button>
                </Box>
                <Box>
                  <NewRecordInput
                    handelInputValueChange={(e: any) =>
                      setRcordType(e.target.value)
                    }
                    placeholder="Please Enter Record Type"
                    value={recordType}
                  />
                  <NewRecordInput
                    handelInputValueChange={(e: any) =>
                      setLabName(e.target.value)
                    }
                    placeholder="Please Enter Lap Name"
                    value={labName}
                  />
                  <NewRecordInput
                    handelInputValueChange={(e: any) =>
                      setHospital(e.target.value)
                    }
                    placeholder="Please Enter Hospital Name"
                    value={hospital}
                  />
                  <NewRecordInput
                    handelInputValueChange={(e: any) =>
                      setDoctorName(e.target.value)
                    }
                    placeholder="Please Enter Doctor Name"
                    value={doctorName}
                  />
                  {error !== '' && <Typography color="red">{error}</Typography>}
                  <Box display="flex" justifyContent="center" marginTop="5px">
                    <Button
                      className={styles.addNewRecord}
                      onClick={() => addNewRecord()}
                      sx={{ width: '50%' }}
                    >
                      <BiPlusMedical color="#fff" /> Add
                    </Button>
                  </Box>
                </Box>
              </Box>
            </div>
          </Fade>
        </Modal>
      </Container>
    </div>
  );
};
export default MedicalRecordsPage;
