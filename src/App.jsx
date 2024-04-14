import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { supabase } from './supabaseClient';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Post from './posts/Post'; // Import the Post component
import Login from './login/Login';
import Home from './home/Home'; // Your main page component



function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Define fetchPosts as a function inside useEffect or directly in the component scope
  useEffect(() => {
    // It's common to define the function directly inside useEffect to ensure it captures the current state and props
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase.from('posts').select('*');
        if (error) {
          throw error;
        }
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();  // Call fetchPosts inside useEffect after defining it
  }, []);  // Empty dependency array to run only once on component mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  </Router>
    
  );
}

function getDate(isoDate) {
  const date = new Date(isoDate);

  // Convert to readable format
  const formattedDate = date.toLocaleDateString("en-US", {
      year: 'numeric',  // Numeric year
      month: 'long',    // Full name of the month
      day: 'numeric'    // Numeric day
  });

  return formattedDate;
}

export default App
