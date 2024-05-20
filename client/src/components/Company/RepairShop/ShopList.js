import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { useRepairShops } from '../../../services/repairShopService';
import { Link } from 'react-router-dom'; 

const ShopList = () => {
  const { user } = useContext(AuthContext);
  const [repairShops, loading, error] = useRepairShops(); 

  return (
    <div className="container">
      <h1>Repair Shops</h1>
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
          {repairShops.map((shop) => (
            <tr key={shop._id}>
              <td>{shop.name}</td>
              <td>{shop.address}</td>
              <td>
                <Link to={`/admin/repair-shops/${shop._id}`} className="btn btn-primary btn-sm">
                  View
                </Link>
                <Link to={`/admin/repair-shops/edit/${shop._id}`} className="btn btn-warning btn-sm">
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

export default ShopList;