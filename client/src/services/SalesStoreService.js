import axios from 'axios';
import { API_URL } from '../config';

const useSalesStores = () => {
  const [salesStores, setSalesStores] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSalesStores = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}/sales-stores`); 
        setSalesStores(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSalesStores();
  }, []);

  return [salesStores, loading, error];
};

const useSalesStoreById = (salesStoreId) => {
  const [salesStore, setSalesStore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSalesStore = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}/sales-stores/${salesStoreId}`); 
        setSalesStore(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSalesStore();
  }, [salesStoreId]);

  return [salesStore, loading, error];
};

const useCreateSalesStore = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createSalesStore = async (name, address) => {
    setLoading(true);
    try {
      await axios.post(`${API_URL}/sales-stores`, {
        name,
        address,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return [createSalesStore, loading, error];
};

const useUpdateSalesStore = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateSalesStore = async (salesStoreId, name, address) => {
    setLoading(true);
    try {
      await axios.put(`${API_URL}/sales-stores/${salesStoreId}`, {
        name,
        address,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return [updateSalesStore, loading, error];
};

const useDeleteSalesStore = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteSalesStore = async (salesStoreId) => {
    setLoading(true);
    try {
      await axios.delete(`${API_URL}/sales-stores/${salesStoreId}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return [deleteSalesStore, loading, error];
};

module.exports = {
  useSalesStores,
  useSalesStoreById,
  useCreateSalesStore,
  useUpdateSalesStore,
  useDeleteSalesStore,
};