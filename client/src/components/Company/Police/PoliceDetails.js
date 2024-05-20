import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { usePoliceById } from '../../../services/policeService';

const PoliceDetails = () => {
  const { policeId } = useParams();
  const [police, loading, error] = usePoliceById(policeId); 

  return (
    <div className="container">
      <h1>Police Station Details</h1>
      {loading && <div className="alert alert-info">Loading...</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      {police && (
        <div>
          <h2>{police.name}</h2>
          <p>Address: {police.address}</p>
          {/* ... display other police details ... */}
        </div>
      )}
    </div>
  );
};

export default PoliceDetails;