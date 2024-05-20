import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { usePolice } from '../../../services/policeService';
import { Link } from 'react-router-dom'; 

const PoliceList = () => {
  const { user } = useContext(AuthContext);
  const [police, loading, error] = usePolice(); 

  return (
    <div className="container">
      <h1>Police Stations</h1>
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
          {police.map((station) => (
            <tr key={station._id}>
              <td>{station.name}</td>
              <td>{station.address}</td>
              <td>
                <Link to={`/admin/police/${station._id}`} className="btn btn-primary btn-sm">
                  View
                </Link>
                <Link to={`/admin/police/edit/${station._id}`} className="btn btn-warning btn-sm">
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

export default PoliceList;