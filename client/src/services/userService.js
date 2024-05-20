import axios from 'axios';
import { API_URL } from '../config';

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}/users`);
        setUsers(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return [users, loading, error];
};

const useCreateUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createUser = async (username, email, password, roleName, companyId) => {
    setLoading(true);
    try {
      await axios.post(`${API_URL}/users`, {
        username,
        email,
        password,
        roleName,
        companyId
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return [createUser, loading, error];
};

const useUpdateUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateUser = async (userId, username, email, password, roleName, companyId) => {
    setLoading(true);
    try {
      await axios.put(`${API_URL}/users/${userId}`, {
        username,
        email,
        password,
        roleName,
        companyId
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return [updateUser, loading, error];
};

const useDeleteUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteUser = async (userId) => {
    setLoading(true);
    try {
      await axios.delete(`${API_URL}/users/${userId}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return [deleteUser, loading, error];
};

module.exports = {
  useUsers,
  useCreateUser,
  useUpdateUser,
  useDeleteUser,
};