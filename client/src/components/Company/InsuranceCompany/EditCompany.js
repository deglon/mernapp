import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import { useCompany, useUpdateCompany } from '../../../services/insuranceCompanyService';

const EditCompany = () => {
  const { companyId } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState(null);

  const [company, loadingCompany, errorCompany] = useCompany(companyId); 
  const [updateCompany, loadingUpdate, errorUpdate] = useUpdateCompany();

  useEffect(() => {
    if (company) {
      setName(company.name);
      setAddress(company.address);
    }
  }, [company]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateCompany(companyId, name, address);
      navigate('/admin/companies'); 
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h1>Edit Insurance Company</h1>
      {/* ... error handling ... */}
      {loadingCompany && <div className="alert alert-info">Loading...</div>}
      {errorCompany && <div className="alert alert-danger">{errorCompany}</div>}
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
          Update Company
        </button>
      </form>
    </div>
  );
};

export default EditCompany;