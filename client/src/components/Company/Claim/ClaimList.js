import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { useClaims } from '../../../services/claimService';
import { Link } from 'react-router-dom'; 

const ClaimList = () => {
  const { user } = useContext(AuthContext);
  const [claims, loading, error] = useClaims(); 

  return (
    <div className="container">
      <h1>Claims</h1>
      {loading && <div className="alert alert-info">Loading...</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Description</th>
            <th>Date</th>
            <th>Claim Number</th>
            <th>Status</th>
            <th>Police Station</th>
            <th>Insurance Company</th>
            <th>Repair Shop</th>
            <th>Sales Store</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {claims.map((claim) => (
            <tr key={claim._id}>
              <td>{claim.description}</td>
              <td>{claim.date.toLocaleDateString()}</td>
              <td>{claim.claimNumber}</td>
              <td>{claim.status}</td>
              <td>{claim.police.name}</td>
              <td>{claim.insuranceCompany.name}</td>
              <td>{claim.repairShop ? claim.repairShop.name : 'N/A'}</td>
              <td>{claim.salesStore ? claim.salesStore.name : 'N/A'}</td>
              <td>
                <Link to={`/admin/claims/${claim._id}`} className="btn btn-primary btn-sm">
                  View
                </Link>
                <Link to={`/admin/claims/edit/${claim._id}`} className="btn btn-warning btn-sm">
                  Edit
                </Link>
                {/* ... add delete button ... */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClaimList;