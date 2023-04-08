import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend=useLoaderData()
    
    return (
        <div>
            <h3>EveryThing About Person...</h3>
            <h2>{friend.name}</h2>
            <h3>{friend.address.street}</h3>
            <p>{friend.phone}</p>
        </div>
    );
};

export default FriendDetail;