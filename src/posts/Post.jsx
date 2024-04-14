import React from 'react';
import './Post.css';


// Assuming each post includes id, title, description, price, image, and created_at
function Post({ post }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }} className="post">
            <h2>{post.title}</h2>
            <p>Price: ${post.price}</p>
            <p>Date Posted: {new Date(post.created_at).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric'
            })}</p>
            <p>Posted by: {post.seller_name}</p>
            {post.image && <img src={post.image} alt={post.title} style={{ maxWidth: '100%', maxHeight: '200px' }} />}
        </div>
    );
}

export default Post;