import axios from 'axios';
import { API_URL } from '../config';

const useClaims = () => {
  const [claims, setClaims] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClaims = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}/claims`);
        setClaims(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClaims();
  }, []);

  return [claims, loading, error];
};

const useClaimById = (claimId) => {
  const [claim, setClaim] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClaim = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}/claims/${claimId}`);
        setClaim(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClaim();
  }, [claimId]);

  return [claim, loading, error];
};

const useCreateClaim = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createClaim = async (
    description,
    date,
    policeId,
    insuranceCompanyId,
    repairShopId,
    salesStoreId
  ) => {
    setLoading(true);
    try {
      await axios.post(`${API_URL}/claims`, {
        description,
        date,
        policeId,
        insuranceCompanyId,
        repairShopId,
        salesStoreId,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return [createClaim, loading, error];
};

const useUpdateClaim = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateClaim = async (
    claimId,
    description,
    date,
    status,
    repairShopId,
    salesStoreId
  ) => {
    setLoading(true);
    try {
      await axios.put(`${API_URL}/claims/${claimId}`, {
        description,
        date,
        status,
        repairShopId,
        salesStoreId,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return [updateClaim, loading, error];
};

const useDeleteClaim = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteClaim = async (claimId) => {
    setLoading(true);
    try {
      await axios.delete(`${API_URL}/claims/${claimId}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return [deleteClaim, loading, error];
};

module.exports = {
  useClaims,
  useClaimById,
  useCreateClaim,
  useUpdateClaim,
  useDeleteClaim,
};