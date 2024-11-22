import React from 'react';
import '../App.css';

const UserItem = ({ user, onDeleteUser }) => {
  return (
    <li className="user-item">
      <img
        src={user.avatar}
        alt={`${user.first_name}'s avatar`}
        className="avatar"
      />
      <div className="details">
        <p className="name">
          {user.first_name} {user.last_name}
        </p>
        <p className="email">{user.email}</p>
      </div>
      <button onClick={() => onDeleteUser(user.id)} className="delete-button">
        Delete
      </button>
    </li>
  );
};

export default UserItem;
