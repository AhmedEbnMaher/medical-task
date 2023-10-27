import axios from "axios";
export const getUsers = async () => {
    try {
      const response = await axios.get(` https://demo3956756.mockable.io/users`);
      if (response.status === 200) {
        return response.data
      }
    } catch (error: any) {
      return { users:null };
    }
  };

  export const getDoctors = async () => {
    try {
      const response = await axios.get(`https://demo3956756.mockable.io/doctors`);
      if (response.status === 200) {
        return response.data
      }
    } catch (error: any) {
      return { users:null };
    }
  };

