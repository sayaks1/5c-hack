// Home.jsx
import React, { useEffect, useState } from 'react';
import Post from '../posts/Post'; 
import LoginButton from '../components/LoginButton'; 
import Sidebar from "../sidebar/sidebar"; // Corrected import with uppercase "S"

import { supabase } from '../supabaseClient'; // Ensure the path is correct

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userName, setUserName] = useState('');



  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase.from('posts').select('*');
        if (error) throw error;
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchUserData = async () => {
        const user = supabase.auth.user();
        
        if (user) {
            setUserName(user.name || 'Guest');
        }
    };  

    fetchPosts();
    fetchUserData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex-container">
        <Sidebar />
        <div className="main-content">
            <div className="top-right">
                <LoginButton />
            </div>
            {/* <h1>Hello, {userName}!</h1> */}
            <div className="grid-container">
                {posts.length > 0 ? (
                    posts.map(post => <Post key={post.id} post={post} />)
                ) : (
                    <p>No posts available</p>
                )}
            </div>
        </div>
    </div>
);

}

export default Home;
