import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import { useCreateCompany } from '../../../services/insuranceCompanyService';

const AddCompany = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [createCompany, loading, errorCreate] = useCreateCompany();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createCompany(name, address);
      navigate('/admin/companies'); 
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h1>Add Insurance Company</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      {errorCreate && <div className="alert alert-danger">{errorCreate}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Company
        </button>
      </form>
    </div>
  );
};

export default AddCompany;