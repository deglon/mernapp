import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useClaimById } from '../../../services/claimService';

const ClaimDetails = () => {
  const { claimId } = useParams();
  const [claim, loading, error] = useClaimById(claimId); 

  return (
    <div className="container">
      <h1>Claim Details</h1>
      {loading && <div className="alert alert-info">Loading...</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      {claim && (
        <div>
          <h2>Description: {claim.description}</h2>
          <p>Date: {claim.date.toLocaleDateString()}</p>
          <p>Claim Number: {claim.claimNumber}</p>
          <p>Status: {claim.status}</p>
          <p>Police Station: {claim.police.name}</p>
          <p>Insurance Company: {claim.insuranceCompany.name}</p>
          <p>Repair Shop: {claim.repairShop ? claim.repairShop.name : 'N/A'}</p>
          <p>Sales Store: {claim.salesStore ? claim.salesStore.name : 'N/A'}</p>
          {/* ... display other claim details ... */}
        </div>
      )}
    </div>
  );
};

export default ClaimDetails;