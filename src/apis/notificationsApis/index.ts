import axios from "axios";

export const getNotifications = async (id:any) => {
    try {
      const response = await axios.get(`http://localhost:8000/${id}`);
      if (response.status === 200) {
        return response.data
      }
    } catch (error: any) {
      return { users:null };
    }
  };
  export const sendUserNotification = async (apointment:any) => {
    try {
      const response = await axios.post(`http://localhost:8000/${apointment.userId}`,{apointment});
      if (response.status === 200) {
        return {status:200}
      }
    } catch (error: any) {
      return { users:null };
    }
  };
  export const sendUserAppointment = async (apointment:any) => {

    try {
      const response = await axios.post(`http://localhost:8000/appointment${apointment.userId}`,{apointment});
      if (response.status === 200) {
        return {status:200}
      }
    } catch (error: any) {
      return { users:null };
    }
  };
  export const setAsDoctorAppointment = async (apointment:any) => {
    try {
      const response = await axios.post(`http://localhost:8000/appointment${apointment.drId}`,{apointment});
      if (response.status === 200) {
        return {status:200}
      }
    } catch (error: any) {
      return { users:null };
    }
  };
  export const deletFromNotifications = async (apointment:any,id:any) => {
    try {
      const response = await axios.delete(`http://localhost:8000/${apointment.drId}/${id}`);
      if (response.status === 200) {
        return {status:200}
      }
    } catch (error: any) {
      return { users:null };
    }
  };
  export const deleteUserNotifications = async (apointment:any,id:any) => {
    try {
      const response = await axios.delete(`http://localhost:8000/${apointment.userId}/${id}`);
      if (response.status === 200) {
        return {status:200}
      }
    } catch (error: any) {
      return { users:null };
    }
  };