import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="container">
      <h1>Welcome, {user.username}!</h1>
      <p>You are logged in as an Admin.</p>
      {/* ... other content for the admin dashboard ... */}
    </div>
  );
};

export default Dashboard;