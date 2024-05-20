import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import { useCreateClaim } from '../../../services/claimService';
import { usePolice } from '../../../services/policeService';
import { useCompanies } from '../../../services/insuranceCompanyService';
import { useRepairShops } from '../../../services/repairShopService';
import { useSalesStores } from '../../services/salesStoreService';

const AddClaim = () => {
  const { user } = useContext(AuthContext);
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [selectedPolice, setSelectedPolice] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedRepairShop, setSelectedRepairShop] = useState(null);
  const [selectedSalesStore, setSelectedSalesStore] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [createClaim, loading, errorCreate] = useCreateClaim();
  const [police, loadingPolice, errorPolice] = usePolice();
  const [companies, loadingCompanies, errorCompanies] = useCompanies();
  const [repairShops, loadingRepairShops, errorRepairShops] = useRepairShops();
  const [salesStores, loadingSalesStores, errorSalesStores] = useSalesStores();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createClaim(
        description,
        date,
        selectedPolice,
        selectedCompany,
        selectedRepairShop,
        selectedSalesStore
      );
      navigate('/admin/claims');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h1>Add Claim</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      {errorCreate && <div className="alert alert-danger">{errorCreate}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date.toISOString().slice(0, 10)}
            onChange={(e) => setDate(new Date(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label htmlFor="police">Police Station:</label>
          <select
            className="form-control"
            id="police"
            value={selectedPolice}
            onChange={(e) => setSelectedPolice(e.target.value)}
          >
            <option value="">Select Police Station</option>
            {police.map((station) => (
              <option key={station._id} value={station._id}>
                {station.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="company">Insurance Company:</label>
          <select
            className="form-control"
            id="company"
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
          >
            <option value="">Select Insurance Company</option>
            {companies.map((company) => (
              <option key={company._id} value={company._id}>
                {company.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="repairShop">Repair Shop:</label>
          <select
            className="form-control"
            id="repairShop"
            value={selectedRepairShop}
            onChange={(e) => setSelectedRepairShop(e.target.value)}
          >
            <option value="">Select Repair Shop</option>
            {repairShops.map((shop) => (
              <option key={shop._id} value={shop._id}>
                {shop.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="salesStore">Sales Store:</label>
          <select
            className="form-control"
            id="salesStore"
            value={selectedSalesStore}
            onChange={(e) => setSelectedSalesStore(e.target.value)}
          >
            <option value="">Select Sales Store</option>
            {salesStores.map((store) => (
              <option key={store._id} value={store._id}>
                {store.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Claim
        </button>
      </form>
    </div>
  );
};

export default AddClaim;