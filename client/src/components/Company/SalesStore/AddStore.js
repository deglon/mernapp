import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import { useCreateSalesStore } from '../../services/salesStoreService';

const AddStore = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [createSalesStore, loading, errorCreate] = useCreateSalesStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createSalesStore(name, address);
      navigate('/admin/sales-stores'); 
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h1>Add Sales Store</h1>
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
          Add Sales Store
        </button>
      </form>
    </div>
  );
};

export default AddStore;