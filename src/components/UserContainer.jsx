import React, { useState } from 'react';
import useUsers from '../hooks/useUsers';
import FilterBox from './FilterBox';
import UserList from './UserList';
import '../App.css';

const UserContainer = () => {
  const { users, loading, fetchUsers, deleteUser } = useUsers();
  const [filterText, setFilterText] = useState('');

  const filteredUsers = users.filter((user) =>
    user.first_name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="user-container">
      <h1 className="header">User Managment</h1>
      <FilterBox filterText={filterText} setFilterText={setFilterText} />
      <button
        onClick={fetchUsers}
        disabled={loading}
        className="fetch-button"
      >
        {loading ? 'Loading...' : 'Fetch Users'}
      </button>
      <UserList users={filteredUsers} onDeleteUser={deleteUser} />
    </div>
  );
};

export default UserContainer;
