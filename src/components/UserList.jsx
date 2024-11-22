import React from 'react';
import UserItem from './UserItem';
import '../App.css';

const UserList = ({ users, onDeleteUser }) => {
  return (
    <div className="list-container">
      {users.length === 0 ? (
        <p className="empty-text">No users found.</p>
      ) : (
        <ul className="list">
          {users.map((user) => (
            <UserItem key={user.id} user={user} onDeleteUser={onDeleteUser} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
