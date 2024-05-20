import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useUsers } from '../../services/userService';
import { useCompanies } from '../../services/insuranceCompanyService';
import { useNavigate } from 'react-router-dom';

const UserManagement = () => {
  const { user } = useContext(AuthContext);
  const [users, loading, error] = useUsers();
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState(''); // Add newPassword state
  const [selectedRole, setSelectedRole] = useState(null);
  const [roles, setRoles] = useState([]);
  const [companies, loadingCompanies, errorCompanies] = useCompanies();
  const [selectedCompany, setSelectedCompany] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch available roles from the server
    const fetchRoles = async () => {
      try {
        const response = await fetch('/api/roles'); // Assuming you have a roles endpoint
        const data = await response.json();
        setRoles(data);
      } catch (err) {
        console.error('Error fetching roles:', err);
      }
    };
    fetchRoles();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ... (Create a new user using the 'useCreateUser' hook from userService.js)
      // Assuming 'userService.js' has a 'useCreateUser' hook to create a new user.
      // Example:
      await createUser(newUsername, newEmail, newPassword, selectedRole, selectedCompany);
      navigate('/admin/users');
    } catch (err) {
      console.error('Error creating user:', err);
    }
  };

  return (
    <div className="container">
      <h1>User Management</h1>
      {/* ... display list of users ... */}
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select
            className="form-control"
            id="role"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <option value="">Select Role</option>
            {roles.map((role) => (
              <option key={role._id} value={role.name}>
                {role.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="company">Company:</label>
          <select
            className="form-control"
            id="company"
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
          >
            <option value="">Select Company</option>
            {companies.map((company) => (
              <option key={company._id} value={company._id}>
                {company.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Add User
        </button>
      </form>
    </div>
  );
};

export default UserManagement;