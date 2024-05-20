import axios from 'axios';
import { API_URL } from '../config';

const useRepairShops = () => {
  const [repairShops, setRepairShops] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepairShops = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}/repair-shops`); 
        setRepairShops(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepairShops();
  }, []);

  return [repairShops, loading, error];
};

const useRepairShopById = (repairShopId) => {
  // ... (Similar to useCompany in insuranceCompanyService.js)
};

const useCreateRepairShop = () => {
  // ... (Similar to useCreateCompany in insuranceCompanyService.js)
};

const useUpdateRepairShop = () => {
  // ... (Similar to useUpdateCompany in insuranceCompanyService.js)
};

module.exports = {
  useRepairShops,
  useRepairShopById,
  useCreateRepairShop,
  useUpdateRepairShop,
};