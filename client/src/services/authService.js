import axios from 'axios';
import { API_URL } from '../config';

const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      username,
      password,
    });
    return response;
  } catch (err) {
    throw err.response.data; // Re-throw error with response data
  }
};

const registerUser = async (username, email, password, roleName) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, {
      username,
      email,
      password,
      roleName, 
    });
    return response;
  } catch (err) {
    throw err.response.data; // Re-throw error with response data
  }
};

const logoutUser = async () => {
  // Implement logout logic if needed (e.g., clear local storage, refresh token)
};

const forgotPassword = async (email) => {
  // ... (Implement logic for forgot password)
};

module.exports = {
  loginUser,
  registerUser,
  logoutUser,
  forgotPassword,
};