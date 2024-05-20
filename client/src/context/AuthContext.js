import React, { createContext, useState, useEffect } from 'react';
import authService from '../services/authService';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const loginUser = async (username, password) => {
    try {
      const response = await authService.loginUser(username, password);
      const { data } = response;
      setUser(data.user);
      localStorage.setItem('user', JSON.stringify(data.user));
      setError(null); // Clear any previous error
    } catch (err) {
      setError(err.message);
    }
  };

  const registerUser = async (username, email, password, roleName) => {
    try {
      const response = await authService.registerUser(username, email, password, roleName);
      const { data } = response;
      setUser(data.user);
      localStorage.setItem('user', JSON.stringify(data.user));
      setError(null); // Clear any previous error
    } catch (err) {
      setError(err.message);
    }
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const forgotPassword = async (email) => {
    // ... (Implement logic for forgot password)
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, error, loginUser, registerUser, logoutUser, forgotPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };