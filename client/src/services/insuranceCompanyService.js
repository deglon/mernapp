import axios from 'axios';
import { API_URL } from '../config';

const useCompanies = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}/insurance-companies`); 
        setCompanies(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  return [companies, loading, error];
};

const useCompany = (companyId) => {
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}/insurance-companies/${companyId}`); 
        setCompany(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCompany();
  }, [companyId]);

  return [company, loading, error];
};

const useCreateCompany = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createCompany = async (name, address) => {
    setLoading(true);
    try {
      await axios.post(`${API_URL}/insurance-companies`, {
        name,
        address,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return [createCompany, loading, error];
};

const useUpdateCompany = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateCompany = async (companyId, name, address) => {
    setLoading(true);
    try {
      await axios.put(`${API_URL}/insurance-companies/${companyId}`, {
        name,
        address,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return [updateCompany, loading, error];
};

const useDeleteCompany = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteCompany = async (companyId) => {
    setLoading(true);
    try {
      await axios.delete(`${API_URL}/insurance-companies/${companyId}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return [deleteCompany, loading, error];
};

module.exports = {
  useCompanies,
  useCompany,
  useCreateCompany,
  useUpdateCompany,
  useDeleteCompany,
};