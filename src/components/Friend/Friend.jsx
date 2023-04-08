import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    return (
        <div className='friend'>
            <h2>Name: {friend.name}</h2>
            <h3>User Name:{friend.username}</h3>
            <p>Email: {friend.email}</p>
            <Link to={`/friend/${friend.id}`}>Show Me Details</Link>
        </div>
    );
};

export default Friend;