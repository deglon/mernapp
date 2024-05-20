import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import { usePoliceById, useUpdatePolice } from '../../../services/policeService';

const EditPolice = () => {
  const { policeId } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState(null);

  const [police, loadingPolice, errorPolice] = usePoliceById(policeId); 
  const [updatePolice, loadingUpdate, errorUpdate] = useUpdatePolice();

  useEffect(() => {
    if (police) {
      setName(police.name);
      setAddress(police.address);
    }
  }, [police]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updatePolice(policeId, name, address);
      navigate('/admin/police'); 
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h1>Edit Police Station</h1>
      {/* ... error handling ... */}
      {loadingPolice && <div className="alert alert-info">Loading...</div>}
      {errorPolice && <div className="alert alert-danger">{errorPolice}</div>}
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
          Update Police Station
        </button>
      </form>
    </div>
  );
};

export default EditPolice;