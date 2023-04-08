import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({ post }) => {
    const navigate= useNavigate();

    const btnHandeler=()=>{
        navigate(`/posts/${id}`)
    }

    const { id, userId, title, body } = post
    
    return (
        <div className='post'>
            <h1>{id}</h1>
            <h2>{title}</h2>
            <Link to={`/posts/${id}`}>Show More..</Link>
            <Link to={`/posts/${id}`}><button>Show More..</button></Link> 
            <button onClick={btnHandeler}>Another Show More..</button>
        </div>
    );
};

export default Post;