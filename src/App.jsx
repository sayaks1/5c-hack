import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './posts/Post'; // Import the Post component


const supabase = createClient("https://lulybjdirjvvpfqgfbzk.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1bHliamRpcmp2dnBmcWdmYnprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMwNDMxNTcsImV4cCI6MjAyODYxOTE1N30.4Aoczgu7M2H3dX8zwBySn2tvr3YpR-2zf2gh88cMreY");


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
    <div className="grid-container">
      {posts.length > 0 ? (
        posts.map(post => <Post key={post.id} post={post} />)
      ) : (
        <p>No posts available</p>
      )}
    </div>
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
