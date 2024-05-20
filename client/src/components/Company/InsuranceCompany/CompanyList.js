import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { useCompanies } from '../../../services/insuranceCompanyService';
import { Link } from 'react-router-dom'; 

const CompanyList = () => {
  const { user } = useContext(AuthContext);
  const [companies, loading, error] = useCompanies(); 

  return (
    <div className="container">
      <h1>Insurance Companies</h1>
      {loading && <div className="alert alert-info">Loading...</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company._id}>
              <td>{company.name}</td>
              <td>{company.address}</td>
              <td>
                <Link to={`/admin/companies/${company._id}`} className="btn btn-primary btn-sm">
                  View
                </Link>
                <Link to={`/admin/companies/edit/${company._id}`} className="btn btn-warning btn-sm">
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

export default CompanyList;