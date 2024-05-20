import axios from 'axios';
import { API_URL } from '../config';

const usePolice = () => {
  const [police, setPolice] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPolice = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}/police`);
        setPolice(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPolice();
  }, []);

  return [police, loading, error];
};

const usePoliceById = (policeId) => {
  const [police, setPolice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPolice = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}/police/${policeId}`);
        setPolice(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPolice();
  }, [policeId]);

  return [police, loading, error];
};

const useCreatePolice = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createPolice = async (name, address) => {
    setLoading(true);
    try {
      await axios.post(`${API_URL}/police`, {
        name,
        address,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return [createPolice, loading, error];
};

const useUpdatePolice = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updatePolice = async (policeId, name, address) => {
    setLoading(true);
    try {
      await axios.put(`${API_URL}/police/${policeId}`, {
        name,
        address,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return [updatePolice, loading, error];
};

const useDeletePolice = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deletePolice = async (policeId) => {
    setLoading(true);
    try {
      await axios.delete(`${API_URL}/police/${policeId}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return [deletePolice, loading, error];
};

module.exports = {
  usePolice,
  usePoliceById,
  useCreatePolice,
  useUpdatePolice,
  useDeletePolice
};