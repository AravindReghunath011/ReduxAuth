import axios from 'axios';

const USER_URL = 'http://localhost:3000/api/users';

// Login
export const login = async (data) => {
  try {
    console.log(data,'data');
    const response = await axios.post(`${USER_URL}/auth`, data);
    console.log(response.data,'response');
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw new Error('Invalid email or password')
    
  }
};

// Register
export const register = async (data) => {
  try {
    console.log(data,'data');
    const response = await axios.post(`${USER_URL}`, data);
    console.log(response.data,'response');
    return response.data;
  } catch (error) {
    throw new Error('User alredy exists')

  }
};

// Logout
export const logout = async () => {
  try {
    const response = await axios.post(`${USER_URL}/logout`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Update User Profile
export const userUpdate = async (data) => {
  try {
    console.log(data,'data');
    const response = await axios.put(`${USER_URL}/profile`, data);
    console.log(response.data,'response');
    return response.data;
  } catch (error) {
    throw new Error('Error occured')
  }
};
