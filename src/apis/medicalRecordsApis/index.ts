import axios from "axios";

export const getAllRecords = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/allrecords`);
      if (response.status === 200) {
        return response.data
      }
    } catch (error: any) {
      return { users:null };
    }
  };
  export const getUserRecords = async (id:any) => {
    try {
      const response = await axios.get(`http://localhost:8000/records${id}`);
      if (response.status === 200) {
        return response.data
      }
    } catch (error: any) {
      return { users:null };
    }
  };
 
  export const setUserRecord = async (id:any,data:any) => {
    try {
      const response = await axios.post(`http://localhost:8000/records${id}`,{data});
      if (response.status === 200) {
        return response.status
      }
    } catch (error: any) {
      return { error:'error' };
    }
  };

 