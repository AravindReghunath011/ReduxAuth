import axios from 'axios';

const ADMIN_URL = 'http://localhost:3000/api/admin';


// Login
export const adminLogin = async (data) => {
    try {
      console.log(data,'data from admin');
      const response = await axios.post(`${ADMIN_URL}/login`, data);
      console.log(response.data,'response');
      return response.data;
    } catch (error) {
      console.log('entered catch');
      console.log(error.message);
      throw new Error('Invalid email or password')
      
    }
  };


// Get Users
export const getUsers = async () => {
  try {
    const response = await axios.get(`${ADMIN_URL}/getusers`);
    console.log(response.data,'response');
    return response.data;
  } catch (error) {
    console.log('entered catch');
    console.log(error.message);

    
    
  }
};


// edit User
export const editUser = async (data) => {
  try {
    const response = await axios.put(`${ADMIN_URL}/edituser`,data);
    console.log(response.data,'response');
    return response.data;
  } catch (error) {
    console.log('entered catch');
    console.log(error.message);

    
    
  }
};
