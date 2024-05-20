import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useSalesStoreById } from '../../services/salesStoreService';

const StoreDetails = () => {
  const { salesStoreId } = useParams();
  const [salesStore, loading, error] = useSalesStoreById(salesStoreId); 

  return (
    <div className="container">
      <h1>Sales Store Details</h1>
      {loading && <div className="alert alert-info">Loading...</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      {salesStore && (
        <div>
          <h2>{salesStore.name}</h2>
          <p>Address: {salesStore.address}</p>
          {/* ... display other sales store details ... */}
        </div>
      )}
    </div>
  );
};

export default StoreDetails;