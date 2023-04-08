import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post=useLoaderData()

    const navigate=useNavigate();

    const btnBack=()=>{
        navigate(-1)
    }
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={btnBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;