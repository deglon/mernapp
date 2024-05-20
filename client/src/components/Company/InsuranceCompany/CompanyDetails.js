import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useCompany } from '../../../services/insuranceCompanyService';

const CompanyDetails = () => {
  const { companyId } = useParams();
  const [company, loading, error] = useCompany(companyId); 

  return (
    <div className="container">
      <h1>Company Details</h1>
      {loading && <div className="alert alert-info">Loading...</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      {company && (
        <div>
          <h2>{company.name}</h2>
          <p>Address: {company.address}</p>
          {/* ... display other company details ... */}
        </div>
      )}
    </div>
  );
};

export default CompanyDetails;