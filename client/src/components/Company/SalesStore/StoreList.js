import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { useSalesStores } from '../../services/salesStoreService';
import { Link } from 'react-router-dom'; 

const StoreList = () => {
  const { user } = useContext(AuthContext);
  const [salesStores, loading, error] = useSalesStores(); 

  return (
    <div className="container">
      <h1>Sales Stores</h1>
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
          {salesStores.map((store) => (
            <tr key={store._id}>
              <td>{store.name}</td>
              <td>{store.address}</td>
              <td>
                <Link to={`/admin/sales-stores/${store._id}`} className="btn btn-primary btn-sm">
                  View
                </Link>
                <Link to={`/admin/sales-stores/edit/${store._id}`} className="btn btn-warning btn-sm">
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

export default StoreList;