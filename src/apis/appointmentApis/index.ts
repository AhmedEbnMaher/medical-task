import axios from "axios";

export const sendAppointment = async (apointment:any) => {
    try {
      const response = await axios.post(`http://localhost:8000/${apointment.drId}`,{apointment});
      if (response.status === 200) {
        return response
      }
    } catch (error: any) {
      return { users:null };
    }
  };
  export const getDoctorsAppointments = async (id:any) => {
    try {
      const response = await axios.get(`http://localhost:8000/appointment${id}`);
      if (response.status === 200) {
        return response.data
      }
    } catch (error: any) {
      return { users:null };
    }
  };
  export const getUsersAppointments = async (id:any) => {
    try {
      const response = await axios.get(`http://localhost:8000/appointment${id}`);
      if (response.status === 200) {
        return response.data
      }
    } catch (error: any) {
      return { users:null };
    }
  };