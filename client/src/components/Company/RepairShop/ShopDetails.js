import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useRepairShopById } from '../../../services/repairShopService';

const ShopDetails = () => {
  const { repairShopId } = useParams();
  const [repairShop, loading, error] = useRepairShopById(repairShopId); 

  return (
    <div className="container">
      <h1>Repair Shop Details</h1>
      {loading && <div className="alert alert-info">Loading...</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      {repairShop && (
        <div>
          <h2>{repairShop.name}</h2>
          <p>Address: {repairShop.address}</p>
          {/* ... display other repair shop details ... */}
        </div>
      )}
    </div>
  );
};

export default ShopDetails;