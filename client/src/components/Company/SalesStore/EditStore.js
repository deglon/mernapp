import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useSalesStoreById, useUpdateSalesStore } from '../../services/salesStoreService';

const EditStore = () => {
  const { salesStoreId } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState(null);

  const [salesStore, loadingSalesStore, errorSalesStore] = useSalesStoreById(salesStoreId); 
  const [updateSalesStore, loadingUpdate, errorUpdate] = useUpdateSalesStore();

  useEffect(() => {
    if (salesStore) {
      setName(salesStore.name);
      setAddress(salesStore.address);
    }
  }, [salesStore]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateSalesStore(salesStoreId, name, address);
      navigate('/admin/sales-stores'); 
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h1>Edit Sales Store</h1>
      {/* ... error handling ... */}
      {loadingSalesStore && <div className="alert alert-info">Loading...</div>}
      {errorSalesStore && <div className="alert alert-danger">{errorSalesStore}</div>}
      {loadingUpdate && <div className="alert alert-info">Updating...</div>}
      {errorUpdate && <div className="alert alert-danger">{errorUpdate}</div>}
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
          Update Sales Store
        </button>
      </form>
    </div>
  );
};

export default EditStore;