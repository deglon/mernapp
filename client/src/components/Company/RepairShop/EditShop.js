import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import { useRepairShopById, useUpdateRepairShop } from '../../../services/repairShopService';

const EditShop = () => {
  const { repairShopId } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState(null);

  const [repairShop, loadingRepairShop, errorRepairShop] = useRepairShopById(repairShopId); 
  const [updateRepairShop, loadingUpdate, errorUpdate] = useUpdateRepairShop();

  useEffect(() => {
    if (repairShop) {
      setName(repairShop.name);
      setAddress(repairShop.address);
    }
  }, [repairShop]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateRepairShop(repairShopId, name, address);
      navigate('/admin/repair-shops'); 
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h1>Edit Repair Shop</h1>
      {/* ... error handling ... */}
      {loadingRepairShop && <div className="alert alert-info">Loading...</div>}
      {errorRepairShop && <div className="alert alert-danger">{errorRepairShop}</div>}
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
          Update Repair Shop
        </button>
      </form>
    </div>
  );
};

export default EditShop;