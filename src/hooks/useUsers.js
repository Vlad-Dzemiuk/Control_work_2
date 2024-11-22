import { useState } from 'react';

const API_URL = 'https://reqres.in/api/users';

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await fetch(`${API_URL}/${userId}`, { method: 'DELETE' });
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };

  return { users, loading, fetchUsers, deleteUser };
};

export default useUsers;
